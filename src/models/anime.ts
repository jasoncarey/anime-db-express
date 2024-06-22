import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'Anime'
})
export class Anime extends Model<Anime> {
    @Column
    name!: string;

    @Column
    type!: string;

    @Column
    year!: number;

    @Column
    episodes!: number;

    @Column
    genre!: string;

    @Column
    studio!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}
