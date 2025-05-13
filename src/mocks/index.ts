// 개발환경에서 네트워크 요청을 모킹하는 놈
export async function initMocks() {
  // 모킹을 배포 후에도 하면 돼요 안돼요?
  // 개발환경에서만 모킹하세요.
  // 기본적으로 노드에서 제공해주는 환경변수입니다.
  // NODE_ENV -> npm run dev -> development
  // npm run build & npm run start -> production
  if (process.env.NODE_ENV !== "development") return;

  // 브라우저가 아니면
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    await worker.start();
  }
}
