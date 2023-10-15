import Footer from "@/components/Footer";
import Context from "@/context/Context";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader
          color="#B41103"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #B41103,0 0 5px #45c6c0"
        />
        <Context>
          <Navbar />
          {children}
          <Footer />
        </Context>
      </body>
    </html>
  );
}
