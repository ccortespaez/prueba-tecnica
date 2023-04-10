import { useState, createContext } from 'react'

export const MovieContext = createContext({
  movies: [],
  setMovies: () => { },
  page: 1,
  setPage: () => { },
  selectedMovie: {
    id: 0,
    title: '',
    backdropPath: '',
    overview: '',
    posterPath: '',
    cast: []
  },
  setSelectedMovie: () => { },
  popularMovies: [],
  setPopularMovies: () => { }
})

export const MoviesProvider = ({ children }: any) => {

  const [movies, setMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [page, setPage] = useState(1)
  const [selectedMovie, setSelectedMovie] = useState({
    id: 0,
    title: '',
    backdropPath: '',
    overview: '',
    posterPath: '',
    cast: []
  })

  return (
    <MovieContext.Provider value={{ movies, setMovies, page, setPage, selectedMovie, setSelectedMovie, popularMovies, setPopularMovies }}>
      {children}
    </MovieContext.Provider>
  )
}