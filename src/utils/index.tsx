export interface MoviesProps {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: any;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  name?: string;
  poster_path: string;
  first_air_date?: string;
  media_type?: string;
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
