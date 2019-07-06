import File from '../models/File';

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
      });

      return res.send(file);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new FileController();
