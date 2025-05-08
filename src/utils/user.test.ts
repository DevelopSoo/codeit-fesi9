// 사용 예시
import axios from "axios";

const fetchProducts = async () => {
  const response = await axios.get(`/products`);
  return response.data;
};

const fetchUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};

jest.mock("axios");

describe("테스트", () => {
  // 리팩토링 전
  beforeEach(() => {
    const mockedAxios = jest.mocked(axios);
    // API 경로에 맞는 목데이터 설정
    // axios.get("/users")
    mockedAxios.get.mockImplementation((url) => {
      if (url.includes("/users")) {
        return Promise.resolve({
          data: [
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
          ],
        });
        // axios.get("/products")
      } else if (url.includes("/products")) {
        return Promise.resolve({
          data: [
            {
              id: 1,
              name: "사과",
              price: 1000,
            },
            {
              id: 2,
              name: "바나나",
              price: 2000,
            },
          ],
        });
      } else {
        return Promise.reject(new Error("존재하지 않는 url입니다."));
      }
    });
  });

  test("setupApiMocks 테스트", async () => {
    const products = await fetchProducts();
    expect(products).toEqual([
      {
        id: 1,
        name: "사과",
        price: 1000,
      },
      {
        id: 2,
        name: "바나나",
        price: 2000,
      },
    ]);
  });

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
});
