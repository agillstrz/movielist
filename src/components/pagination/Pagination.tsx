"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ currentPage }: { currentPage: number }) {
  const { replace } = useRouter();
  return (
    <div className="flex flex-wrap w-full justify-center mt-5 gap-2">
      <button
        onClick={() => replace(`?page=${currentPage - 1}`)}
        className={`p-2 px-5 border border-white hover:bg-secondary rounded-lg `}
      >
        Prev
      </button>
      <button
        onClick={() => replace(`?page=${currentPage + 1}`)}
        className={`p-2 px-5 border border-white hover:bg-secondary rounded-lg `}
      >
        Next
      </button>
    </div>
  );
}
