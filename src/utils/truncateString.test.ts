import truncateString from "./truncateString";

test("문자열이 최대 길이보다 길면 자른 후 '...'을 추가한다", () => {
  expect(truncateString("Hello World", 8)).toBe("Hello...");
});

test("문자열이 최대 길이보다 짧으면 그대로 반환한다", () => {
  expect(truncateString("Hello", 10)).toBe("Hello");
});
