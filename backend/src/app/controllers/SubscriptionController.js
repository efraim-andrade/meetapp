import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Subscription from '../models/Subscription';

import SubscriptionMail from '../jobs/SubscriptionMail';
import Queue from '../../lib/Queue';

class SubscriptionController {
  async index(req, res) {
    try {
      const subscriptions = await Subscription.findAll({
        where: {
          user_id: req.userId,
        },
        attributes: [],
        include: [
          {
            model: Meetup,
            attributes: [
              'id',
              'title',
              'description',
              'location',
              'date',
              'banner_id',
            ],
            where: {
              date: { [Op.gt]: new Date() },
            },
            required: true,
            as: 'meetup',
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['id', 'name'],
              },
              {
                model: File,
                as: 'banner',
                attributes: ['url', 'name', 'path'],
              },
            ],
          },
        ],
        // order: [[Meetup, 'date']],
      });

      return res.json(subscriptions);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['name', 'email'],
          },
        ],
      });

      if (req.userId === meetup.user_id) {
        return res
          .status(400)
          .json({ error: 'A provider can`t subscribe in your own event!' });
      }

      if (meetup.past) {
        return res
          .status(401)
          .json({ error: 'Cannot subscribe in an old event!' });
      }

      const userSubscriptions = await Subscription.findAll({
        where: {
          user_id: req.userId,
          meetup_id: meetup.id,
        },
      });

      if (!userSubscriptions) {
        return res.status(401).json({
          error: 'Cannot subscribe more than one time!',
        });
      }

      const checkDate = await Subscription.findOne({
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Meetup,
            as: 'meetup',
            required: true,
            where: {
              date: meetup.date,
            },
          },
        ],
      });

      if (checkDate) {
        return res
          .status(401)
          .json({ error: 'You already have an event to go!' });
      }

      const subscription = await Subscription.create({
        user_id: req.userId,
        meetup_id: meetup.id,
      });

      const user = await User.findByPk(req.userId);

      await Queue.add(SubscriptionMail.key, {
        meetup,
        user,
      });

      return res.send(subscription);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const subscription = await Subscription.findAll({
        where: {
          meetup_id: req.params.id,
        },
      });

      if (!subscription) {
        return res.status(401).json({ error: 'Subscription not found!' });
      }

      await subscription[0].destroy();

      return res.json({ deleted: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new SubscriptionController();
