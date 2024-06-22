import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, BeforeCreate } from 'sequelize-typescript';
import { hashPassword } from '../utils/hashUtils';

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

    @BeforeCreate
    static async hashPasswordHook(user: User) {
        user.password_hash = await hashPassword(user.password_hash);
    }
}
