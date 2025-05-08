describe.skip("이 그룹은 무시됨", () => {
  test("이 테스트는 실행되지 않음", () => {
    expect(1 + 1).toBe("귀요미");
  });
});

describe.only("이 그룹만 실행됨", () => {
  test("이 테스트는 실행됨", () => {
    expect(2 + 2).toBe(4);
  });
});
