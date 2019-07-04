import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password_hash } = req.body;

    const user = await User.findOne({ where: { email } });
  }
}

export default UserController;
