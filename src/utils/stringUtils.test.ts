import { capitalize, truncate } from "./stringUtils";

// 1. stringUtils.ts 파일에서 테스트를 작성합니다.

describe("stringUtils 모듈 테스트", () => {
  describe("capitalize 함수 테스트", () => {
    test("문자열의 첫 글자를 대문자로 변환해야 함", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("wORLD")).toBe("World");
      expect(capitalize("javaScript")).toBe("Javascript");
    });

    test("빈 문자열(''), null, undefined에 대해 빈 문자열을 반환해야 함", () => {
      expect(capitalize("")).toBe("");
      // @ts-expect-error 잘못된 입력이라도 타입 에러가 발생하지 않도록 방지
      expect(capitalize(null)).toBe("");
      // @ts-expect-error 잘못된 입력이라도 타입 에러가 발생하지 않도록 방지
      expect(capitalize(undefined)).toBe("");
    });

    test("한 글자 문자열도 처리해야 함", () => {
      expect(capitalize("a")).toBe("A");
      expect(capitalize("Z")).toBe("Z");
    });
  });

  describe("truncate 함수 테스트", () => {
    test("최대 길이보다 짧은 문자열은 그대로 반환해야 함", () => {
      expect(truncate("Hello", 10)).toBe("Hello");
    });

    test("최대 길이보다 긴 문자열은 자르고 말줄임표를 추가해야 함", () => {
      expect(truncate("안녕하세요 저는 홍길동입니다.", 5)).toBe(
        "안녕하세요...",
      );
    });

    test("사용자 정의 말줄임표를 사용할 수 있어야 함", () => {
      expect(truncate("안녕하세요 저는 홍길동입니다.", 8, " [...]")).toBe(
        "안녕하세요 저는 [...]",
      );
    });

    test("빈 문자열, null, undefined에 대해 빈 문자열을 반환해야 함", () => {
      // @ts-expect-error 잘못된 입력이라도 에러가 발생하지 않도록 방지
      expect(truncate("")).toBe("");
      // @ts-expect-error 잘못된 입력이라도 에러가 발생하지 않도록 방지
      expect(truncate(null)).toBe("");
      // @ts-expect-error 잘못된 입력이라도 에러가 발생하지 않도록 방지
      expect(truncate(undefined)).toBe("");
    });
  });
});
