import { Author } from "../entities/author";
import { Category } from "../entities/category";
import { Post } from "../entities/post";
import { DataSource } from "typeorm";

export class DatabaseProvider {
  public dataSource: DataSource | undefined;

  public async initDatabase() {
    this.dataSource = new DataSource({
      database: "test",
      name: ":memory:",
      entities: [Category, Author, Post],
      synchronize: true,
      type: "sqlite",
    });

    this.dataSource = await this.dataSource.initialize();
  }

  public async closeDatabase() {
    this.dataSource?.destroy();
  }
}
