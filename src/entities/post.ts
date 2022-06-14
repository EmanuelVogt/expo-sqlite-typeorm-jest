import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Category } from "./category";
import { Author } from "./author";

@Entity("post")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column("text")
  text!: string;

  @ManyToMany(() => Category, {
    cascade: ["insert"],
  })
  @JoinTable()
  categories!: Category[];

  @ManyToOne(() => Author, {
    cascade: ["insert"],
  })
  author!: Author;
}
