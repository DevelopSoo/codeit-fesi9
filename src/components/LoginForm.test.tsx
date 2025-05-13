import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("로그인 버튼이 잘 클릭되는지 확인 -> onSubmit 함수 내에 console.log가 호출되는지 확인", async () => {
  const user = userEvent.setup();
  render(<LoginForm />);
  // 1. input을 가져온다
  const emailInput = screen.getByRole("textbox", { name: "이메일:" });
  const passwordInput = screen.getByLabelText("비밀번호:");
  // 2. input에 값을 입력한다
  // fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  // fireEvent.change(passwordInput, { target: { value: "password123" } });
  await user.type(emailInput, "test@test.com");
  await user.type(passwordInput, "password123");
  // 3. 잘 입력됐는지 확인한다.
  expect(emailInput).toHaveValue("test@test.com");
  expect(passwordInput).toHaveValue("password123");
});

test("로그인 버튼을 누르면 로그인 성공이 뜨는지 확인", () => {
  render(<LoginForm />);
  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  // 1. input을 가져온다
  const emailInput = screen.getByRole("textbox", { name: "이메일:" });
  const passwordInput = screen.getByLabelText("비밀번호:");

  // 2. input에 값을 입력한다
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });

  // 3. 잘 입력됐는지 확인한다.
  expect(emailInput).toHaveValue("test@test.com");
  expect(passwordInput).toHaveValue("password123");

  const form = screen.getByRole("form");
  fireEvent.submit(form);

  expect(alertSpy).toHaveBeenCalledWith(
    "로그인 성공 test@test.com password123",
  );

  alertSpy.mockRestore();
});
