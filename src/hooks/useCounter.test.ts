import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter 테스트", () => {
  test("초기값이 올바르게 설정되는지 확인", () => {
    // 1. renderHook 함수를 사용한다.
    const { result } = renderHook(() => useCounter(10));
    // 2. result의 current -> useCounter의 반환값을 가져올 수 있다.
    expect(result.current.count).toBe(10);
  });

  test("increment 함수를 호출하면 count가 1 증가하는지 확인", () => {
    const { result } = renderHook(() => useCounter(0));
    // state 는 비동기적으로 업데이트가 됨
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("decrement 함수를 호출하면 count가 1 감소하는지 확인", () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  test("reset 함수를 호출하면 count가 초기값으로 변한다.", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(10);
  });
});
