import { MoviesProps } from "@/utils";
import Card from "../card/Card";

export default function Category({
  results,
  label,
}: {
  label: string;
  results: MoviesProps[];
}) {
  return (
    <>
      <div className=" lg:px-10 px-1  w-full overflow-hidden  bg-base">
        <h1 className="lg:text-xl text-sm font-semibold my-3">{label}</h1>
        <div className="w-full  overflow-scroll h-[15rem]   lg:h-[19rem] gap-x-2 justify-between  relative flex ">
          <div className="flex  gap-x-1 transition-all duration-500 ease-in-out">
            {results.map((m: MoviesProps) => (
              <Card key={m.id} datas={m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
