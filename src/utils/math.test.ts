// ./math 모듈의 모든 기능을 모킹 -> 가짜로 만들어줄게
jest.mock("./math", () => {
  const originalMath = jest.requireActual("./math");

  return {
    ...originalMath,
    add: jest.fn(),
  };
});

import * as math from "./math";

test("모듈이 다 모킹됐는지 테스트", () => {
  // 이거 가짜 함수임?
  expect(jest.isMockFunction(math.add)).toBe(true);
  expect(jest.isMockFunction(math.subtract)).toBe(false);
  expect(jest.isMockFunction(math.multiply)).toBe(false);
  expect(jest.isMockFunction(math.divide)).toBe(false);

  jest.mocked(math.add).mockReturnValue(10);

  expect(math.add(1, 2)).toBe(10);
  expect(math.subtract(10, 1)).toBe(9);
  expect(math.multiply(2, 3)).toBe(6);
  expect(math.divide(10, 2)).toBe(5);
  expect(() => math.divide(10, 0)).toThrow("Division by zero");
});
