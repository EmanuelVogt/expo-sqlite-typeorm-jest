import { DatabaseProvider } from "../database";
import "reflect-metadata";

describe("database", () => {
  let service = new DatabaseProvider();

  beforeEach(async () => {
    await service.initDatabase();
  });

  test("connection", () => {
    expect(service.dataSource?.isInitialized).toBe(true);
  });
});
