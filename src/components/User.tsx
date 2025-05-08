"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
export default function User() {
  // 3. 가지고 와서 쓴다. -> useContext
  const 값 = useUserContext();

  return <div className="bg-amber-200">유저 이름: {값}</div>;
}

export const useUserContext = () => {
  const 값 = useContext(UserContext);
  if (!값) {
    throw new Error("Provider 안에 넣으세요");
  }
  return 값;
};
