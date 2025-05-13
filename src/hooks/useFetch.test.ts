import useFetch from "./useFetch";
import { renderHook, waitFor } from "@testing-library/react";

describe("useFetch 테스트", () => {
  beforeEach(() => {
    // 테스트 전에 모든 모킹을 초기화
    jest.resetAllMocks();
  });
  test("데이터를 성공적으로 가져올 때, data, loading, error가 의도한 대로 잘 설정되는지 확인", async () => {
    const mockData = {
      name: "이서미",
      age: 20,
    };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const { result } = renderHook(() => useFetch("https://api.example.com"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
    });
  });

  test("에러가 발생하면 error가 올바르게 설정된다", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("에러 발생"));
    const { result } = renderHook(() => useFetch("https://api.example.com"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(null);
      expect(result.current.error?.message).toBe("에러 발생");
    });
  });
});
