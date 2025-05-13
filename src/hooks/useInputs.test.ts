import { renderHook, act } from "@testing-library/react";
import useInputs from "./useInputs";
import { ChangeEvent } from "react";

describe("useInputs 훅 테스트", () => {
  const initialValues = { username: "", email: "" };
  test("초기값이 올바르게 설정되는지 확인", () => {
    const { result } = renderHook(() => useInputs(initialValues));

    expect(result.current.values).toEqual(initialValues);
  });

  test("단일 필드 값의 업데이트가 잘 되는지 확인", () => {
    const { result } = renderHook(() => useInputs(initialValues));

    act(() => {
      result.current.handleChange({
        target: {
          name: "username",
          value: "예병수",
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual({
      username: "예병수",
      email: "",
    });
  });

  test("여러 필드 값의 업데이트가 잘 되는지 확인", () => {
    const { result } = renderHook(() => useInputs(initialValues));

    act(() => {
      result.current.handleChange({
        target: {
          value: "예병수",
          name: "username",
        },
      } as ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: {
          name: "email",
          value: "yebingsu@gmail.com",
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual({
      username: "예병수",
      email: "yebingsu@gmail.com",
    });
  });

  test("reset이 잘 동작하는지 확인", () => {
    const { result } = renderHook(() => useInputs(initialValues));

    const mockEvent = {
      target: { name: "username", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.values).toEqual({
      username: "김철수",
      email: "",
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.values).toEqual(initialValues);
  });

  test("initialValues가 빈 객체({})일 때 handleChange와 reset이 정상 동작", () => {
    const { result } = renderHook(() => useInputs({}));

    const mockEvent = {
      target: { name: "username", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.values).toEqual({ username: "김철수" });

    act(() => {
      result.current.reset();
    });

    expect(result.current.values).toEqual({});
  });
});
