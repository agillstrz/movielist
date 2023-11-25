import { getServerSession } from "next-auth";
import { AuthOption } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(AuthOption);

  return (
    <div className="h-screen flex justify-center items-center">
      <p>halo</p>
    </div>
  );
}
