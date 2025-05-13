// 목(MOCK)을 쓰는 이유
// 필요한 것만 테스트하고, 불필요한 건 가짜로 만들자

export const getUser = async (userId: string) => {
  // 1. API 요청
  // 와이파이가 끊겨
  // 백엔드 서버가 끊겨 -> 고장 => 테스트 실패 => 어?? 내 잘못인가?

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const data = await response.json();
  // 2. 가공 -> 이게 복잡해!!!!
  // 정렬 or 추가, 빼기, ......

  return {
    ...data,
    age: 20,
    gender: "male",
  };
};
