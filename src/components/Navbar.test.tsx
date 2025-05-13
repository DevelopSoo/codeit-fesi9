import { render, screen } from "@testing-library/react";
import NavBar from "./Navbar";

test("네비게이션 바가 올바르게 렌더링되는지 테스트", () => {
  render(<NavBar />);

  const heading = screen.getByRole("heading", { name: "웹사이트 로고" });
  expect(heading).toBeInTheDocument();

  const searchInput = screen.getByRole("searchbox", { name: "검색" });
  expect(searchInput).toBeInTheDocument();

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});
