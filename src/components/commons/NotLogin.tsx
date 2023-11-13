"use client";
import Link from "next/link";

export default function NotLogin() {
  return (
    <div className="flex gap-x-1 items-center">
      <Link
        href={"/auth"}
        className="py-2 px-4 font-semibold bg-primary rounded-lg hover:bg-primary/75 transition-all duration-150 ease-linear "
      >
        Sign in
      </Link>
      <button className="py-2 px-4 font-semibold bg-secondary rounded-lg hover:bg-secondary/75 transition-all duration-150 ease-linear ">
        Sign up
      </button>
    </div>
  );
}
