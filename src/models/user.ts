import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, BeforeCreate, DataType } from 'sequelize-typescript';
import { hashPassword } from '../utils/hashUtils';
import { UserAnime } from './UserAnime';

// Model has id as default
@Table
export class User extends Model<Partial<User>> {
    @Column
    username!: string;
    
    @Column
    email!: string;

    @Column
    password_hash!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @Column({
        type: DataType.VIRTUAL,
        allowNull: false,
    })
    password!: string;

    @BeforeCreate
    static async hashPasswordHook(user: User) {
        user.password_hash = await hashPassword(user.password);
    }

    @HasMany(() => UserAnime)
    userAnime!: UserAnime[];
}
