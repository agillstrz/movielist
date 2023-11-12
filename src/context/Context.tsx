"use client";
import { MyListProps } from "@/utils";
import { createContext, useState } from "react";

export const MyContext = createContext({});
export default function Context({ children }: any) {
  const [fav, setFav] = useState<MyListProps[]>([]);

  return (
    <MyContext.Provider value={{ fav, setFav }}>{children}</MyContext.Provider>
  );
}
