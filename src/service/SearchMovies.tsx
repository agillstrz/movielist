"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchMovies(
  setModal: React.Dispatch<React.SetStateAction<boolean>>
) {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/results?search=${name}`);
    setModal(false);
  };
  return { name, handleSearch, setName };
}
