// 5번 여기저기 사용된다 라고 가정
// 모킹을 몇 번? 5번
export async function getUser(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const data = await response.json();
  return data;
}
