// hooks/useDebounce.ts
import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
  // query 가 바뀐다는 건 -> value 가 바뀐다는 것
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 4. 타이머 0.5초 뒤에 실행하는 타이머 생성
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // setDebounceValue("가나다") -> 0.5초 후에 실행되는 타이머 생성 ->

    // cleanup 함수
    // 1. 컴포넌트가 unmount되기 직전 -> 죽을 때
    // 2. useEffect 콜백함수 실행 직전
    return () => clearTimeout(handler);
    // 3. value가 바뀌었으니 -> useEffect 콜백함수가 재실행
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
