require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
