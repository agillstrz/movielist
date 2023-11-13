// import { getServerSession } from "next-auth";
// import { AuthOption } from "./app/api/auth/[...nextauth]/route";
// import { NextRequest, NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const session = await getServerSession(AuthOption);
//   if (!session) {
//     return NextResponse.redirect(new URL("/", request.url));
//   } else {
//     return null;
//   }
// }
// export const config = {
//   matcher: ["/my-list"],
// };
// // export default WithAuth(mainMiddleware, ["/my-list"]);
