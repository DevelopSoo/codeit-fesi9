import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

test("버튼의 onClick 함수가 호출되는지 확인", () => {
  // 사람마다 다른 함수를 넣을 거 아니에요!~!!!
  const handleSubmit = jest.fn();
  // 들어가는 함수 내용 -> 뭐 들어갈지 몰라!!

  render(<Button onClick={handleSubmit}>버튼내용</Button>);

  const button = screen.getByText("버튼내용");
  fireEvent.click(button);
  expect(handleSubmit).toHaveBeenCalled();
});
