import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';

class Anime extends Model<InferAttributes<Anime>, InferCreationAttributes<Anime>> {
    declare id: number;
    declare name: string;
    declare type: string;
    declare year: number;
    declare episodes: number;
    declare genre: string;
    declare studio: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Anime.init(
    {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    episodes: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    studio: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'users',
        sequelize,
    }
);

export default Anime;