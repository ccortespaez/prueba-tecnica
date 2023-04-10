export type MovieContextType = {
  movies: Movie[]
  setMovies: any
  page: number
  setPage: any
  selectedMovie: SelectedMovie
  setSelectedMovie: any
}

export type SelectedMovie = {
  id: number
  title: string
  posterPath: string
  backdropPath: string
  overview: string
  cast: []
}

export type Cast = {
  name: string
  profilePath: string
}

export type Movie = {
  id: number
  title: string
  release_date: string
  poster_path: string
  overview: string
  backdrop_path: string
}

