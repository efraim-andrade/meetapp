import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

import Meetup from '../models/Meetup';
import User from '../models/User';
import Subscription from '../models/Subscription';

class SubscriptionController {
  async store(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: 'provider',
            attributes: ['name', 'email'],
          },
        ],
      });

      if (req.userId === meetup.provider_id) {
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

      await Mail.sendMail({
        to: `${meetup.provider.name} <${meetup.provider.email}>`,
        subject: 'Novo participante',
        template: 'subscriptions',
        context: {
          provider: meetup.provider.name,
          user: user.name,
          meetup: meetup.title,
        },
      });

      return res.send(subscription);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new SubscriptionController();
