"use client";
import { MyListProps } from "@/utils";
import { createContext, useState } from "react";

export const MyContext = createContext({});
export default function Providers({ children }: any) {
  const [fav, setFav] = useState<MyListProps[]>([]);

  let count = fav.length;

  return (
    <MyContext.Provider value={{ fav, setFav, count }}>
      {children}
    </MyContext.Provider>
  );
}
