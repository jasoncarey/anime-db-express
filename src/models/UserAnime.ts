import { Table, Column, Model, ForeignKey, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';
import { User } from './User';
import { Anime } from './Anime';

@Table({
    tableName: 'UserAnime'
})

export class UserAnime extends Model<UserAnime> {
    @ForeignKey(() => User)
    @Column
    userId!: number;

    @ForeignKey(() => Anime)
    @Column
    animeId!: number;

    @Column({
        type: DataType.ENUM('plan_to_watch', 'watching', 'completed', 'dropped'),
        allowNull: false,
    })
    status!: string;

    @Column
    rating!: number;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}
    