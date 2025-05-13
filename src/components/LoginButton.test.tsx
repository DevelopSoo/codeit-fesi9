// components/LoginButton.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginButton } from "./LoginButton";
import { AuthContext, AuthProvider } from "@/contexts/AuthContext";

test("renders login button when not authenticated", () => {
  render(
    <AuthProvider>
      <LoginButton />
    </AuthProvider>,
  );
  expect(screen.getByText("로그인")).toBeInTheDocument();
});

test("인증되어있을 대, 로그아웃 버튼이 렌더링되는지 확인", () => {
  render(
    <AuthContext.Provider
      value={{
        isAuthenticated: true,
        login: jest.fn(),
        logout: jest.fn(),
      }}
    >
      <LoginButton />
    </AuthContext.Provider>,
  );
  // 로그아웃 버튼이 보이니?
  expect(screen.getByText("로그아웃")).toBeInTheDocument();
});

test("로그인 버튼 클릭 시 로그인 함수가 호출되는지 확인", () => {
  const authValue = {
    isAuthenticated: false,
    login: jest.fn(),
    logout: jest.fn(),
  };
  render(
    <AuthContext.Provider value={authValue}>
      <LoginButton />
    </AuthContext.Provider>,
  );
  const loginButton = screen.getByText("로그인");
  fireEvent.click(loginButton);
  expect(authValue.login).toHaveBeenCalled();
});
