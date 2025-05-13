import Message from "./Message";
import { render, screen } from "@testing-library/react";

test("에러가 없는 경우에 메세지가 보이지 않아야 한다", () => {
  render(<Message isError={false} />);
  const noErrorMessage = screen.queryByText("오류가 발생했습니다");
  expect(noErrorMessage).not.toBeInTheDocument();
});

test("에러가 있는 경우 메세지가 표시되어야 한다", () => {
  render(<Message isError={true} />);
  const errorMessage = screen.getByText("오류가 발생했습니다");
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveClass("error");
});
