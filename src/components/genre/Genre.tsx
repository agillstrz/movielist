"use client";
import axiosInstance from "@/config/axiosInstance";
import { GenreProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
const genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Abenteuer",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Komödie",
  },
  {
    id: 80,
    name: "Krimi",
  },
  {
    id: 99,
    name: "Dokumentarfilm",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familie",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "Historie",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Musik",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Liebesfilm",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV-Film",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "Kriegsfilm",
  },
  {
    id: 37,
    name: "Western",
  },
];
export default function Genre({ setDatas, setLoading }: any) {
  // const [genre, setGenre] = useState<any>([]);

  // function getGenre() {
  //   axiosInstance
  //     .get(`/genre/movie/list?api_key=${CONSTANT.API_KEY}`)
  //     .then((res) => {
  //       setGenre(res.data.genres);
  //     });
  // }

  const getByGenre = (id: number) => {
    setDatas([]);
    setLoading(true);
    axiosInstance
      .get(`/discover/movie?api_key=${CONSTANT.API_KEY}&with_genres=${id}`)
      .then((res) => {
        setDatas(res.data.results);
      })
      .finally(() => setLoading(false));
  };

  // useEffect(() => {
  //   getGenre();
  // }, []);

  return (
    <>
      {genre.length <= 1
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
            <button
              key={m}
              className="w-24 animate-pulse bg-white/20 rounded-md  h-5 font-bold text-sm "
            ></button>
          ))
        : genre.map((genres: GenreProps) => (
            <button
              onClick={() => getByGenre(genres.id)}
              key={genres.id}
              className="px-3 py-1 font-bold text-sm hover:bg-primary/80    bg-primary rounded-full "
            >
              {genres.name}
            </button>
          ))}
    </>
  );
}
