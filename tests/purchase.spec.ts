import { test, expect } from "@playwright/test";

test("구매 시나리오", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/login");

  // 2. 이메일 입력창에 abc@test.com을 입력한다.
  await page.getByRole("textbox", { name: "이메일" }).fill("abc@test.com");
  // 3. 비밀번호 입력창에 123123을 입력한다.
  await page.getByRole("textbox", { name: "비밀번호" }).fill("123123");
  // 4. 로그인 버튼을 클릭한다. 자동으로 상품 목록 페이지로 이동한다.
  await page.getByRole("button", { name: "로그인" }).click();

  // 5. 상품 페이지에 접속했는지 확인한다.
  await expect(page).toHaveURL("http://localhost:3000/products");

  // 6. 상품이 렌더링되는지 확인한다. - 상품의 개수는 알 수 없으므로 가장 앞에 있는 요소만 확인한다.
  // 참고: ^= 는 CSS의 시작 일치 선택자 - product- 로 시작하는 요소를 선택한다.
  const firstProduct = page.locator('[data-testid^="product-"]').first();
  await expect(firstProduct).toBeVisible();

  await firstProduct.click();
  const productId = await firstProduct.getAttribute("data-product-id");

  await expect(page).toHaveURL(`http://localhost:3000/products/${productId}`);

  // 10. 수량 증가 버튼을 2번 클릭한다.
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "+" }).click();

  await page.getByRole("button", { name: "구매" }).click();

  await expect(page).toHaveURL("http://localhost:3000/purchase/complete");
  await expect(page.getByText("구매가 완료되었습니다")).toBeVisible();
});
