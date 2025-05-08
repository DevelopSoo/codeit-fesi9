import axios from "axios";

jest.mock("axios");
export function mockUserResponse(userData = {}) {
  const defaultUser = {
    id: 1,
    name: "김철수",
    username: "kim",
    email: "kim@example.com",
  };

  const user = { ...defaultUser, ...userData };
  const mockedAxios = jest.mocked(axios);
  mockedAxios.get.mockResolvedValue({ data: user });
}
