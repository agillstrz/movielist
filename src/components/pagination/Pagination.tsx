"use client";
import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  total,
}: {
  total: any;
  currentPage: number;
}) {
  const { replace } = useRouter();
  const number = [];
  for (let i = 1; i <= total; i++) {
    number.push(i);
  }

  return (
    <div className="flex flex-wrap w-full justify-center mt-5 gap-2">
      <button
        onClick={() => replace(`?page=${currentPage - 1}`)}
        className={`p-2 px-3 lg:px-5 border border-white hover:bg-secondary rounded-lg `}
      >
        Prev
      </button>
      <div className="flex gap-1">
        {number
          .slice(currentPage > 6 ? currentPage - 3 : 0, currentPage + 3)
          .map((page, index) => (
            <button
              onClick={() => replace(`?page=${page}`)}
              key={index}
              className={`px-4 py-1 rounded-lg border  ${
                currentPage == page && "bg-white text-secondary"
              }`}
            >
              {page}
            </button>
          ))}
      </div>
      <button
        onClick={() => replace(`?page=${currentPage + 1}`)}
        className={`p-2 px-3 lg:px-5 border border-white hover:bg-secondary rounded-lg `}
      >
        Next
      </button>
    </div>
  );
}
