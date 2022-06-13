import { DatabaseProvider } from "../database";

describe("database", () => {
  let service = new DatabaseProvider();

  beforeEach(async () => {
    await service.initDatabase();
  });

  test("connection", () => {
    expect(service.dataSource?.isInitialized).toBe(true);
  });

  afterEach(async () => {
    await service.closeDatabase();
  });
});
