import { MoviesProps } from "@/utils";
import ButtonRoute from "../buttons/ButtonRoute";
import Card from "../card/Card";

export default function Category({
  results,
  label,
  path,
}: {
  label: string;
  path?: string;
  results: MoviesProps[];
}) {
  return (
    <div className="w-full overflow-x-auto bg-base">
      <ButtonRoute label={label} path={path} />
      <div className="w-full   gap-x-2 justify-between  relative flex ">
        <div className="flex    gap-x-1 transition-all duration-500 ease-in-out">
          {results.map((m: MoviesProps) => (
            <Card key={m.id} datas={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
