import CardLogin from "@/components/card/CardLogin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AuthOption } from "../api/auth/[...nextauth]/route";
import "./login.css";

export default async function Auth() {
  const session = await getServerSession(AuthOption);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex w-screen h-screen   bg-base fixed">
      <div className="w-full  flex justify-center items-center fixed backdrop-blur-sm bg-cover bg-center h-full">
        <CardLogin />
      </div>
    </div>
  );
}
