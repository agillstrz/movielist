"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface ButtonProps {
  className?: string;
  label: string;
  id: string;
  title: string;
}
export default function TitleGallery({
  className,
  label,
  id,
  title,
}: ButtonProps) {
  const route = useRouter();
  const handleNavigate = () => {
    route.push(`/movies/gallery/${id}?title=${title}`);
  };
  return (
    <button
      onClick={handleNavigate}
      className={`${className} bg-primary rounded-lg  font-semibold tracking-wide `}
    >
      {label}
    </button>
  );
}
