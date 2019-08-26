import Meetup from '../models/Meetup';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    try {
      const meetup = await Meetup.findAll({
        where: { user_id: req.userId },
        attributes: ['id', 'title', 'description', 'past', 'location', 'date'],
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['url', 'name', 'path'],
          },
        ],
      });

      return res.send(meetup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new ProviderController();
