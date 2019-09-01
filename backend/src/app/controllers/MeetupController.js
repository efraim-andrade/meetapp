import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
  isBefore,
  startOfHour,
  parseISO,
  startOfDay,
  endOfDay,
} from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    try {
      const { date, page = 1 } = req.query;

      if (!date) {
        return res.status(400).json({ error: 'Invalid date!' });
      }

      const searchDate = parseISO(date);

      const meetups = await Meetup.findAll({
        where: {
          date: {
            [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
          },
        },
        attributes: ['id', 'title', 'description', 'past', 'location', 'date'],
        limit: 10,
        offset: (page - 1) * 10,
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
      });

      return res.send(meetups);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      banner_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const hourStart = startOfHour(req.body.date);

      if (isBefore(hourStart, new Date())) {
        return res
          .status(400)
          .json({ error: 'The date has to be before today!' });
      }

      const meetup = await Meetup.create({
        ...req.body,
        user_id: req.userId,
      });

      return res.send(meetup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      banner_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const meetup = await Meetup.findByPk(req.params.id);

      const { user_id, past } = meetup;

      if (user_id !== req.userId) {
        return res
          .status(401)
          .json({ error: 'Only the event provider can edit the event!' });
      }

      if (past) {
        return res.status(401).json({ error: 'You can`t edit an old event!' });
      }

      await meetup.update(req.body);

      return res.json(meetup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id);

      const { user_id, past } = meetup;

      if (user_id !== req.userId) {
        return res
          .status(401)
          .json({ error: 'Only the event provider can delete the event!' });
      }

      if (past) {
        return res
          .status(401)
          .json({ error: 'You can`t delete an old event!' });
      }

      await meetup.destroy();

      return res.json({ deleted: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new MeetupController();
