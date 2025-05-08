"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // 실제 문서상 데이터가 이렇게 생겨서 다음과 같이 변경했습니다.
  // 상황에 따라 다르게 작성해야 합니다.
  const [data, setData] = useState({
    nextCursor: 0,
    list: [],
  });
  // 선택 시 변경될 정렬 state 만들기
  const [order, setOrder] = useState("recent");

  useEffect(() => {
    // order 변경 시 새로운 데이터를 가져오기 위해 새로운 요청 보내기
    fetch(`https://mogazoa-api.vercel.app/13-7/products?order=${order}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    // dependency array에 다음과 같이 추가해야 합니다.
  }, [order]);

  return (
    <div>
      {/* state 변경을 위한 Select 추가 */}
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="recent">최신순</option>
        <option value="reviewCount">리뷰순</option>
        <option value="rating">평점순</option>
      </select>

      {data.list.map((item) => (
        <div key={item.id} className="border-b border-gray-200 p-4">
          <div>이름:{item.name}</div>
          <div>평점:{item.rating}</div>
          <div>리뷰수:{item.reviewCount}</div>
          <div>등록일:{item.createdAt}</div>
        </div>
      ))}
    </div>
  );
}
