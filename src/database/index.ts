import { Author } from "../entities/author";
import { Category } from "../entities/category";
import { Post } from "../entities/post";
import { DataSource } from "typeorm";

export class DatabaseProvider {
  public dataSource: DataSource | undefined;

  public async initDatabase() {
    if (this.dataSource?.isInitialized) {
      await this.dataSource.destroy();
    }

    this.dataSource = new DataSource({
      database: "test",
      name: ":memory:",
      entities: [Category, Author, Post],
      synchronize: true,
      type: "sqlite",
    });

    this.dataSource = await this.dataSource.initialize();
  }

  public async erase() {
    if (this.dataSource?.isInitialized) {
      await this.dataSource?.destroy();
      return this.dataSource?.isInitialized;
    }

    return null;
  }
}
