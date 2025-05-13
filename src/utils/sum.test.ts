import { getUser } from "./sum";

test("getUser 함수에서 가공이 잘 되는지 확인", async () => {
  // FETCH는 실제로 하지마!!!! 가짜로 해!!
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({
      id: 1,
      name: "민혜",
    }),
  });
  const user = await getUser("1");
  expect(user).toEqual({
    id: 1,
    name: "민혜",
    age: 20,
    gender: "male",
  });
});
