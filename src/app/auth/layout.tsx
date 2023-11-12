import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { AuthOption } from "../api/auth/[...nextauth]/route";

export default async function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
