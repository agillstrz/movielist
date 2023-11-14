import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
export const AuthOption: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: "bf2c7bd6b481440c2bfb",
      clientSecret: "2d127f411c464fe4da89f0c359f88f170c098cd8",
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOLE_ID || "",
      clientSecret: process.env.NEXT_GOOLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        cookies().set("token", "value", { value: account?.access_token });
        cookies().set("img", "value", { value: profile?.image });
        cookies().set("name", "value", { value: profile?.name });
        console.log(account);
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },

  pages: {
    signIn: "/auth",
  },

  secret: "rahasia123",
};
const handler = NextAuth(AuthOption);
export { handler as GET, handler as POST };
