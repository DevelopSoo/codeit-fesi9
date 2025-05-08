"use client";

import { createContext, useState } from "react";

export const UserContext = createContext<string>("");

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("임찬호");

  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};
