"use client";
import { MyListProps } from "@/utils";
import CardFav from "../card/CardFav";

export default function ListMovies() {
  let data: any = [];

  const storedData = localStorage.getItem("data") || null;

  if (storedData) {
    const parsedData = JSON.parse(storedData);

    if (parsedData && Object.keys(parsedData).length !== 0) {
      data = parsedData;
    }
  }

  return (
    <>
      {!data || data.length == 0 ? (
        <div className="h-screen flex justify-center items-center  absolute top-0">
          tidak ada
        </div>
      ) : (
        data?.map((m: MyListProps) => (
          <CardFav key={m.id} img={m.img} title={m.title} />
        ))
      )}
    </>
  );
}
