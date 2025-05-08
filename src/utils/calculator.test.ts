test("Mock 함수에 구현 제공하기", () => {
  const mockFn = jest.fn();
  let count = 0;

  // 기본 구현 제공
  mockFn.mockImplementation((a, b) => {
    count++;
    return a + b;
  });

  expect(mockFn(1, 2)).toBe(3);
  expect(mockFn(2, 4)).toBe(6);
  expect(count).toBe(2);

  // 특정 호출에 대한 구현 제공
  mockFn.mockImplementationOnce((a, b) => a * b);
  mockFn.mockImplementationOnce((a, b) => a - b);

  expect(mockFn(2, 3)).toBe(6); // 곱셈 (Once)
  expect(mockFn(5, 2)).toBe(3); // 뺄셈 (Once)
  expect(mockFn(1, 2)).toBe(3); // 덧셈 (기본 구현)
  expect(count).toBe(3);
});
