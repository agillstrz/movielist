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
    <div
      className="flex w-screen h-screen   bg-base fixed"
      // style={{
      //   backgroundImage: `url('https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')`,
      // }}
    >
      <div className="w-full  flex justify-center items-center fixed backdrop-blur-sm bg-cover bg-center h-full">
        <CardLogin />
      </div>
    </div>
  );
}
