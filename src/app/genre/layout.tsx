import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className=" min-h-screen layouts">{children}</div>;
}
