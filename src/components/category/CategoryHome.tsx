"use client";
import { MoviesProps } from "@/utils";
import ButtonRoute from "../buttons/ButtonRoute";
import Card from "../card/Card";
import { UseFetchData } from "@/service/UseFetchData";
import CONSTANT from "@/utils/CONSTANT";
import { useState } from "react";

export default function CategoryHome({
  results,
  label,
  path,
}: {
  label: string;
  path?: string;
  results: MoviesProps[];
}) {
  const [type, setType] = useState("movie");
  const { data: popular, isLoading } = UseFetchData({
    url: `/${type}/popular?api_key=${CONSTANT.API_KEY}`,
    key: type,
  });

  return (
    <div className="w-full overflow-x-auto bg-base">
      {/* <ButtonRoute label={label} path={path} /> */}
      <div className="w-full   gap-x-2 justify-between  relative flex ">
        <div className="flex    gap-x-1 transition-all duration-500 ease-in-out">
          {popular?.map((m: MoviesProps) => (
            <Card key={m.id} datas={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
