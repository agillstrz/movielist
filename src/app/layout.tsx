import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
