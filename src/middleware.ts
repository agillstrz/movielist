import { getServerSession } from "next-auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { AuthOption } from "./app/api/auth/[...nextauth]/route";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await getServerSession(AuthOption);
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return null;
  }
}
export const config = {
  matcher: ["/movix"],
};
// export default WithAuth(mainMiddleware, ["/my-list"]);
