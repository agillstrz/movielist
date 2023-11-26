"use client";
import { UseFetchData } from "@/service/UseFetchData";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import { useSearchParams } from "next/navigation";
import Card from "../card/Card";
import CardLoading from "../loadings/CardLoading";
import Pagination from "../pagination/Pagination";

export default function ByCategory({
  pathName,
  type,
}: {
  type: string;
  pathName: string;
}) {
  const currentPage = useSearchParams().get("page") || 1;
  const { data, isLoading } = UseFetchData({
    url: `/${type}/${pathName}?api_key=${CONSTANT.API_KEY}&page=${currentPage}`,
    key: `${pathName}${Number(currentPage)}`,
  });

  return (
    <div className="">
      <div className="grid h-full  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
        {isLoading
          ? new Array(10)
              .fill(null)
              .map((m, index) => <CardLoading key={index} />)
          : data?.map((movie: MoviesProps) => (
              <Card key={movie.id} datas={movie} />
            ))}
      </div>
      <Pagination currentPage={Number(currentPage)} />
    </div>
  );
}
