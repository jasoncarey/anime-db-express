import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

// Model has id as default
@Table
export class User extends Model<User> {
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
}
