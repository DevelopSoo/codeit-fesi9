import { act, renderHook } from "@testing-library/react";
import useDebounce from "./useDebounce";

describe("useDebounce 테스트", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // 타이머 모킹
  });

  afterEach(() => {
    jest.useRealTimers(); // 타이머 복원
  });

  test("초기값이 적절하게 설정된다.", () => {
    const { result } = renderHook(() => useDebounce("초기값", 500));
    expect(result.current).toBe("초기값");
  });

  test("value 변경 후 delay 시간 경과 시 debouncedValue가 업데이트되는지 확인", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: {
          value: "",
          delay: 500,
        },
      },
    );

    expect(result.current).toBe("");

    rerender({ value: "새로운값", delay: 500 });

    // 5초 지나가버려~
    // 0.5초 지나가버려~
    act(() => {
      jest.advanceTimersByTime(500); // 500ms를 즉시 실행
    });

    expect(result.current).toBe("새로운값");
  });

  test("delay 시간 내에 value가 여러 번 바뀌었을 대, 마지막 값만 반영이 되는지 확인", () => {
    // "가나다" - 0.3초
    // "가나다라" -> 0.5초 지날 동안 가만히 있어요 -> debounceValue => 가나다라
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: {
          value: "",
          delay: 500,
        },
      },
    );

    rerender({ value: "중간값", delay: 500 });
    act(() => {
      jest.advanceTimersByTime(300); // 300ms 지나가버려~
    });
    // 아직 지연 시간이 지나지 않았으므로 초기값 유지
    expect(result.current).toBe("");

    rerender({ value: "최종값", delay: 500 });
    act(() => {
      jest.advanceTimersByTime(500); // 500ms 지나가버려~
    });
    // 지연 시간이 지났으므로 최종값 반영
    expect(result.current).toBe("최종값");
  });
});
