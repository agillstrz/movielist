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
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
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
