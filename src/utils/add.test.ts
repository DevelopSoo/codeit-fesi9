// src/utils/add.test.ts
import { add } from "./add";

test("2와 3을 더하면 5가 된다", () => {
  expect(add(2, 3)).toBe(5);
});
