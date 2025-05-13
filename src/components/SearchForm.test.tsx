import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

test("검색 폼이 잘 작동하는지 확인", async () => {
  const user = userEvent.setup();

  const handleSearch = jest.fn();

  render(<SearchForm onSearch={handleSearch} />);

  const input = screen.getByLabelText("검색:");
  await user.type(input, "윤아님 반갑습니다.");
  const submitButton = screen.getByRole("button", { name: "검색" });

  await user.click(submitButton);
  expect(handleSearch).toHaveBeenCalledWith("윤아님 반갑습니다.");
});
