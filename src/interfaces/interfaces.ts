import { ReactNode } from "react";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  setSelectedMovie: Function;
  cast: Cast[];
}

export interface MovieContextProps {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  selectedMovie: Movie;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie>>;
  popularMovies: Movie[];
  setPopularMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export interface Cast {
  profile_path: String,
  name: String,
}

export interface MoviesProviderProps {
  children: ReactNode;
}