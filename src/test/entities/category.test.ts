import { DatabaseProvider } from "../../database";
import { Category } from "../../entities/category";

describe("AuthorEntity", () => {
  let dbProvider: DatabaseProvider;

  beforeEach(async () => {
    dbProvider = new DatabaseProvider();
    await dbProvider.initDatabase();
  });

  test("get category", async () => {
    await Category.create({
      id: 1,
      name: "Post",
    }).save();

    const category = await Category.findOne({ where: { id: 1 } });

    expect(category).toEqual({
      id: 1,
      name: "Post",
    });
  });

  test("crete category", async () => {
    const category = await Category.create({
      id: 2,
      name: "Post2",
    }).save();

    expect(category).toEqual({
      id: 2,
      name: "Post2",
    });
  });

  test("delete category", async () => {
    expect(await Category.delete(1)).toEqual({ affected: 1, raw: [] });
  });

  afterAll(async () => {
    await dbProvider.erase();
  });

  test("update category", async () => {
    await Category.create({
      id: 1,
      name: "Post 1",
    }).save();

    const updateAuthor = await dbProvider.dataSource
      ?.createQueryBuilder()
      .update(Category)
      .set({ name: "Post1" })
      .where("id = :id", { id: 1 })
      .execute();

    expect(updateAuthor).toMatchObject({ affected: 1 });
  });
});
