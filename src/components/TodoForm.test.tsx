import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("할 일을 입력하면 input값이 변경되는지 확인", () => {
  render(<TodoForm />);

  const input = screen.getByLabelText("할 일:");
  // 처음에는 빈 문자열인지 확인
  expect(input).toHaveValue("");

  fireEvent.change(input, { target: { value: "잠을 겁나 많이 자기" } });

  expect(input).toHaveValue("잠을 겁나 많이 자기");
});
