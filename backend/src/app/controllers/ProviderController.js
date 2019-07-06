import Meetup from '../models/Meetup';

class ProviderController {
  async index(req, res) {
    const meetup = await Meetup.findAll({
      where: { provider_id: req.userId },
    });

    return res.send(meetup);
  }
}

export default new ProviderController();
