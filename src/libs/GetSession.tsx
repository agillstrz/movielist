import { AuthOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function GetSession() {
  const session = await getServerSession(AuthOption);
  return session;
}
