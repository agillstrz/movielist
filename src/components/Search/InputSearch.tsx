"use client";
import SearchMovies from "@/service/SearchMovies";
import React from "react";

export default function InputSearch() {
  const { handleSearch, setName } = SearchMovies();
  return (
    <form onSubmit={handleSearch} action="" className="w-full">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Find Movies..."
        className="outline-none bg-transparent px-2 h-12 w-full focus:rounded-lg border-b-primary border  border-transparent focus:border-primary"
        name=""
        id=""
      />
    </form>
  );
}
