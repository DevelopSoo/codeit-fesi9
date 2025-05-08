// src/services/UserPostService.test.ts
jest.mock("./UserService.ts");

import { getUserPosts } from "./UserPostService";

test("__mocks__폴더 내에 작성한 모킹이 잘 적용되는지 확인", async () => {
  const posts = await getUserPosts(1);

  expect(posts).toEqual([
    {
      id: 1,
      title: "Post 1",
      body: "Body 1",
      userId: 1,
      name: "김철수",
    },
  ]);
});
