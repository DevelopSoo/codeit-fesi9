// 사용 예시

import { server } from "@/mocks/server";
import { fetchUsers, getUser } from "./user";
import { http, HttpResponse } from "msw";

describe("테스트", () => {
  test("fetchUsers 테스트", async () => {
    const users = await fetchUsers();
    expect(users).toEqual([
      {
        id: 1,
        name: "김철수",
        email: "kim@example.com",
      },
      {
        id: 2,
        name: "이영희",
        email: "lee@example.com",
      },
    ]);
  });

  test("에러", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        // 네트워크 요청 에러를 만드는 것
        return HttpResponse.error();
      }),
    );
    await expect(fetchUsers()).rejects.toThrow(
      "알 수 없는 에러가 발생했습니다.",
    );
  });

  test("성공적인 API 호출 시 사용자 데이터를 반환해야 함", async () => {
    // 여기에 axios 모킹을 없앴습니다.
    const result = await getUser(1);
    expect(result).toEqual({
      id: 1,
      name: "김철수",
      email: "kim@example.com",
    });
  });

  test("axios 에러도 처리", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users/1", () => {
        // 백엔드에서 반환하는 값은 없고 (null)
        // 상태 코드가 500으로 반환 -> catch 블록으로 이동
        return HttpResponse.json(null, { status: 500 });
      }),
    );

    await expect(getUser(1)).rejects.toThrow(
      "유저 정보를 불러오는데 실패했습니다.",
    );
  });
});
