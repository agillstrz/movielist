import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Providers from "@/context/Context";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { NextAuthProvider } from "./Provider";
import "./globals.css";
import QueryProviders from "@/libs/QueryProviders";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "zemovies",
  description: "movies website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <NextAuthProvider>
          <NextTopLoader
            color="#6d28d9"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #B41103,0 0 5px #45c6c0"
          />
          <QueryProviders>
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </QueryProviders>
        </NextAuthProvider>
      </body>
    </html>
  );
}
