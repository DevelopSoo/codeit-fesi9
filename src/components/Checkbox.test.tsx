import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("체크박스 토글 잘 되는지 확인", () => {
  render(<Checkbox />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
