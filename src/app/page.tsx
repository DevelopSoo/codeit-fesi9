import SnapshotButton from '@/components/SnapshotButton';

export default function Home() {
  return (
    <>
      <h1>게시글 목록</h1>
      <SnapshotButton>클릭</SnapshotButton>
      <div>내 환경: {process.env.NEXT_PUBLIC_MY_ENVIRONMENT}</div>
    </>
  );
}
