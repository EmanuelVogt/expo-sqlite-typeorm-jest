import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity("author")
export class Author extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  birthdate!: string;
}
