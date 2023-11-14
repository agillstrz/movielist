"use client";
import Link from "next/link";

export default function NotLogin() {
  return (
    <div className="flex gap-x-1 items-center">
      <Link
        href={"/auth"}
        className="py-2 px-7 font-semibold bg-primary rounded-lg hover:bg-primary/75 transition-all duration-150 ease-linear "
      >
        Login
      </Link>
    </div>
  );
}
