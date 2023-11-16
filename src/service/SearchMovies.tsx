"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchMovies() {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/results?search=${name}`);
  };
  return { name, handleSearch, setName };
}
