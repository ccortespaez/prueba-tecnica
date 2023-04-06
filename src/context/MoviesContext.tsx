import { useState, createContext } from 'react'
import { Movie, MovieContextType } from '../types/types'

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  setMovies: () => { },
  page: 1,
  setPage: () => { },
  selectedMovie: {},
  setSelectedMovie: () => { }
})

export const MoviesProvider = ({ children }: any) => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [selectedMovie, setSelectedMovie] = useState()

  return (
    <MovieContext.Provider value={{ movies, setMovies, page, setPage, selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  )
}