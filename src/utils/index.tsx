export interface MoviesProps {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: any;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: string;
  genres: any;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: string;
  vote_count: Number;
}

export interface MyListProps {
  id: number;
  title: string;
  img: string;
  desc: string;
}
export interface GenreProps {
  id: number;
  name: string;
}

export interface AuthProps {
  role: number;
  token: string;
  name: string;
}
