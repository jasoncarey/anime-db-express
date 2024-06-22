import User from './user';
import Anime from './anime';

const sequelize = require('../config/database');

const syncDatabase = async () => {
    await sequelize.sync({ force: true });
};

export { User, Anime, syncDatabase };