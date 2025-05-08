import { calculateDiscount } from "./discount";

test("정상적익 가격과 할인율에 대한 계산이 잘 되는지 확인", () => {
  expect(calculateDiscount(1000, 10)).toBe(900);
  expect(calculateDiscount(2000, 50)).toBe(1000);
  expect(calculateDiscount(1000, 0)).toBe(1000);
});

test("가격에 음수가 주어지면 0을 반환하는지 확인", () => {
  expect(calculateDiscount(-1000, 10)).toBe(0);
  expect(calculateDiscount(-500, 20)).toBe(0);
});

test("할인율에 100초과 혹은 음수가 주어지면 0을 반환하는지 확인", () => {
  expect(calculateDiscount(1000, 150)).toBe(0);
  expect(calculateDiscount(1000, -10)).toBe(0);
});

test("잘못된 입력 타입이 주어지면 0을 반환하는지 확인", () => {
  // @ts-expect-error 타입 체크 무시
  expect(() => calculateDiscount("1000", 10)).toThrow("숫자가 들어와야 합니다");
  // @ts-expect-error 타입 체크 무시
  expect(() => calculateDiscount(1000, "10")).toThrow("숫자가 들어와야 합니다");
  // @ts-expect-error 타입 체크 무시
  expect(() => calculateDiscount(null, undefined)).toThrow(
    "숫자가 들어와야 합니다",
  );
});
