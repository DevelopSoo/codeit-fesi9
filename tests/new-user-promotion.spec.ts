import { test, expect } from "@playwright/test";

test("신규 가입자를 위한 쿠폰 발급 시나리오", async ({ page }) => {
  await page.goto("http://localhost:3000/main");
  // 회원가입 페이지로 이동
  await page.getByRole("button", { name: "지금 가입하면 이득" }).click();
  await expect(page).toHaveURL("http://localhost:3000/auth/signup");

  await page.getByRole("textbox", { name: "이메일" }).fill("test@test.com");
  await page
    .getByRole("textbox", { name: "비밀번호", exact: true })
    .fill("password");
  await page
    .getByRole("textbox", { name: "비밀번호 확인", exact: true })
    .fill("password");

  await page.getByRole("button", { name: "회원가입" }).click();

  await expect(
    page.getByText("신규 가입자시군요! 쿠폰이 발급됐어요!"),
  ).toBeVisible();
});
