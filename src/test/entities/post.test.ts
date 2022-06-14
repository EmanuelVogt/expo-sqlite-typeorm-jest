import { Author } from "../../entities/author";
import { DatabaseProvider } from "../../database";
import { Post } from "../../entities/post";
import { Category } from "../../entities/category";

describe("Post Entity", () => {
  let dbProvider: DatabaseProvider;

  beforeEach(async () => {
    dbProvider = new DatabaseProvider();
    await dbProvider.initDatabase();
  });

  afterEach(async () => {
    await dbProvider.erase();
  });

  test("get posts", async () => {});

  test("crete post", async () => {
    const author = Author.create({
      birthdate: "22/12/1998",
      id: 1,
      name: "Nicolas Tesla",
    });

    const category1 = Category.create({ id: 1, name: "Tecnology" });

    const post = await Post.create({
      id: 1,
      title: "Post1",
      author: author,
      text: "awdawdaw",
      categories: [category1],
    }).save();

    expect(post).toBeTruthy();
  });

  test("delete post", async () => {
    expect(await Post.delete(1)).toEqual({ affected: 1, raw: [] });
  });

  test("update post", async () => {
    const author = Author.create({
      birthdate: "22/12/1998",
      id: 1,
      name: "Nicolas Tesla",
    });

    const category1 = Category.create({ id: 1, name: "Tecnology" });

    const post = await Post.create({
      id: 1,
      title: "Post1",
      author: author,
      text: "awdawdaw",
      categories: [category1],
    }).save();

    await dbProvider.dataSource
      ?.createQueryBuilder()
      .update(Post)
      .set({ title: "PostUdpated" })
      .where("id = :id", { id: 1 })
      .execute();

    const postUpdated = await Post.findOne({ where: { id: 1 } });

    expect(postUpdated?.title).not.toEqual(post.title);
  });
});
