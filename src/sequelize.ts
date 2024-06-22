import { Sequelize } from "sequelize-typescript";
import { Anime } from "./models/Anime";
import { User } from "./models/User";

export const sequelize = new Sequelize({
    database: 'anime_db',
    dialect: "sqlite",
    username: 'root',
    password: 'root',
    storage: "./database.sqlite",
    models: [Anime, User],
});

//models: [__dirname + '/models'],