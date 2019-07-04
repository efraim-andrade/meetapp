import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists!' });
      }

      const { id, name, email, role } = await User.create(req.body);

      return res.json({ id, name, email, role });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new UserController();
