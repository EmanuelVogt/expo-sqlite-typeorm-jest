import { DatabaseProvider } from "../../database";

describe("database", () => {
  let service = new DatabaseProvider();

  beforeAll(async () => {
    await service.initDatabase();
  });

  test("connection", () => {
    expect(service.dataSource?.isInitialized).toBe(true);
  });

  test("erase and disconec", async () => {
    expect(await service.erase()).toBe(false);
  });

  afterAll(async () => {
    await service.erase();
  });
});
