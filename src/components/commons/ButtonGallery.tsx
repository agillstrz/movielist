"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function ButtonGallery() {
  const route = useRouter();
  const params = useSearchParams();

  return (
    <div className="w-full relative ">
      <button
        onClick={() => route.back()}
        className="absolute hover:border-primary hover:text-primary left-0 top-1/2 -translate-y-1/2 text-xl p-2 hover:border-1 border rounded-full transition-all duration-150"
      >
        <RiArrowGoBackLine />
      </button>
      <h1 className="text-center font-semibold text-lg mb-5">
        Galley {params.get("title")}{" "}
      </h1>
    </div>
  );
}
