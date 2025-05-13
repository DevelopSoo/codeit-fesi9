import RegistrationForm from "./RegistrationForm";
import { render, screen } from "@testing-library/react";

test("회원가입 폼이 올바르게 렌더링되는지 확인", () => {
  render(<RegistrationForm />);
  //<h2>회원가입</h2>
  const heading = screen.getByRole("heading", { name: "회원가입" });
  // <input id="username" type="text" />
  const usernameInput = screen.getByRole("textbox", { name: "사용자 이름:" });
  //<button type="submit">가입하기</button>
  const submitButton = screen.getByRole("button", { name: "가입하기" });

  // 2. getByLabelText
  const passwordInput = screen.getByLabelText("비밀번호:");

  expect(heading).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
