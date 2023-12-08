import ByCategory from "@/components/movies/ByCategory";

export default async function page({
  params,
}: {
  params: { path: string; page: string };
}) {
  const { path, page } = params;

  const pathName =
    path == "up-coming"
      ? "upcoming"
      : path == "top-rated"
      ? "top_rated"
      : path == "now-playing"
      ? "now_playing"
      : path;

  const label =
    path == "up-coming"
      ? "Up Coming"
      : path == "top-rated"
      ? "Top Rated"
      : path == "now-playing"
      ? "Now Playing"
      : "Popular";

  return (
    <div className="layouts">
      <h1 className="font-bold text-xl mb-3 ">{label}</h1>
      <ByCategory type="movie" pathName={pathName} />
    </div>
  );
}
