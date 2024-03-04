import create from 'zustand';

// 상태 타입 정의
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// 초기 상태
const initialState: CounterState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

// Zustand 스토어 생성
export const useCounterStore = create<CounterState>((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
