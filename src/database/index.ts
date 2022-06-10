import { Author } from "entities/author";
import { Category } from "entities/category";
import { Post } from "entities/post";
import { DataSource } from "typeorm";

export default class DatabaseProvider {
  private dataSource = new DataSource({
    database: "test",
    driver: require("expo-sqlite"),
    entities: [Category, Author, Post],
    synchronize: true,
    type: "expo",
  });

  public async initDatabase() {
    this.dataSource.initialize();
  }
}
