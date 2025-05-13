import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("프로필 컴포넌트가 올바르게 렌더링되어야 한다", () => {
  render(<UserProfile name="홍길동" isVerified={true} />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("홍길동님의 프로필");

  // alternative
  const avatar = screen.getByAltText("프로필 이미지");
  expect(avatar).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "프로필 수정" });
  expect(button).toBeEnabled();

  const container = screen.getByTestId("profile-container");
  expect(container).toHaveClass("verified");
});
