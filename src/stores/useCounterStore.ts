import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}
// 이름 짓기
const useCounterStore = create<CounterState>()((set) => ({
  // count: 여기 저기 가져다 쓸 상태 (전역 상태)
  count: 0,
  // count(전역 상태)를 변경하는 함수
  // set -> 얘가 실제로 변경하는 놈이다
  // state: 기존의 전역 상태 { count: 0 }
  // { count: state.count + 1 } -> 새로운 전역 상태를 만든다.
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
