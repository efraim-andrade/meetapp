import Meetup from '../models/Meetup';

class ProviderController {
  async index(req, res) {
    try {
      const meetup = await Meetup.findAll({
        where: { user_id: req.userId },
      });

      return res.send(meetup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new ProviderController();
