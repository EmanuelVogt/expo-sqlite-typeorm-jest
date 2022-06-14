import { DatabaseProvider } from "../../database";
import { Author } from "../../entities/author";

describe("AuthorEntity", () => {
  let dbProvider: DatabaseProvider;

  beforeEach(async () => {
    dbProvider = new DatabaseProvider();
    await dbProvider.initDatabase();
  });

  afterEach(async () => {
    await dbProvider.erase();
  });

  test("get author", async () => {
    await Author.create({
      id: 1,
      name: "Nicolas Tesla",
      birthdate: "22/12/1998",
    }).save();
    const author = await Author.findOne({ where: { id: 1 } });

    expect(author).toEqual({
      birthdate: "22/12/1998",
      id: 1,
      name: "Nicolas Tesla",
    });
  });

  test("crete author", async () => {
    const author = await Author.create({
      id: 2,
      name: "Nicolas Tesla",
      birthdate: "22/12/1998",
    }).save();

    expect(author).toEqual({
      birthdate: "22/12/1998",
      id: 2,
      name: "Nicolas Tesla",
    });
  });

  test("delete author", async () => {
    await Author.create({
      id: 2,
      name: "Nicolas Tesla",
    }).save();

    expect(await Author.delete(2)).toEqual({ affected: 1, raw: [] });
  });

  test("update author", async () => {
    await Author.create({
      id: 1,
      name: "Nicolas Tesla",
      birthdate: "22/12/1998",
    }).save();

    const updateAuthor = await dbProvider.dataSource
      ?.createQueryBuilder()
      .update(Author)
      .set({ name: "Mário" })
      .where("id = :id", { id: 1 })
      .execute();

    expect(updateAuthor).toMatchObject({ affected: 1 });
  });
});
