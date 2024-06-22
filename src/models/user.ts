import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number;
    declare username: string;
    declare email: string;
    declare password_hash: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    password_hash: {
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

export default User;