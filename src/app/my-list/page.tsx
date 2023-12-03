import CardFav from "@/components/card/CardFav";
import { getServerSession } from "next-auth";
import { AuthOption } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(AuthOption);
  return (
    <div className="layouts min-h-screen flex flex-col items-center">
      <h1 className="lg:text-4xl text-lg mb-1 lg:mb-5 font-bold">
        My Favorite Movie and Series
      </h1>

      <div className="grid lg:mx-24 place-items-center grid-cols-2 lg:grid-cols-3 gap-3">
        <CardFav session={session} />
      </div>
    </div>
  );
}
