import ListMovies from "@/components/movies/ListMovies";
export default function page() {
  return (
    <div className="layouts min-h-screen  flex justify-center">
      <div className="flex  items-center flex-col gap-y-2">
        <ListMovies />
      </div>
    </div>
  );
}
