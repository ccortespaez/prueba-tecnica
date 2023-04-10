import { useState, createContext } from 'react';
import { Movie, MovieContextProps, MoviesProviderProps } from '../interfaces/interfaces';

export const MovieContext = createContext<MovieContextProps>({
  movies: [],
  setMovies: () => { },
  page: 1,
  setPage: () => { },
  selectedMovie: {
    id: 0,
    title: '',
    backdrop_path: '',
    overview: '',
    poster_path: '',
    cast: [],
    setSelectedMovie: () => { },
  },
  setSelectedMovie: () => { },
  popularMovies: [],
  setPopularMovies: () => { }
});

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie>({
    id: 0,
    title: '',
    backdrop_path: '',
    overview: '',
    poster_path: '',
    cast: [],
    setSelectedMovie: () => {},
  });

  return (
    <MovieContext.Provider value={{ movies, setMovies, page, setPage, selectedMovie, setSelectedMovie, popularMovies, setPopularMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
