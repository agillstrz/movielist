import ByCategory from "@/components/movies/ByCategory";

export default async function page({ params }: { params: { path: string } }) {
  const { path } = params;
  const pathName =
    path == "airing-today"
      ? "airing_today"
      : path == "top-rated"
      ? "top_rated"
      : path;
  const label =
    path == "airing-today"
      ? "Airing Today"
      : path == "top-rated"
      ? "Top Rated"
      : "Popular";
  return (
    <div className="layouts">
      <h1 className="font-bold text-xl mb-3 ">{label}</h1>
      <ByCategory type="tv" pathName={pathName} />
    </div>
  );
}
