"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonRoute({
  label,
  path = "/",
}: {
  label: string;
  path?: string;
}) {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`${path}`)}
      className="lg:text-xl text-sm font-semibold my-3"
    >
      {label}
    </button>
  );
}
