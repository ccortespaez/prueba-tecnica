export type MovieContextType = {
  movies: Movie[]
  setMovies: any
  page: number
  setPage: any
  selectedMovie: SelectedMovie
  setSelectedMovie: any
}

type SelectedMovie = {
  id: number
  title: string
  backdropPath: string
  overview: string
  posterPath: string
  cast: Cast[]
}

export type Cast = {
  name: string
  profilePath: string
}

export type Movie = {
  id: number
  title: string
  release_date: string
  poster_path: string | null
  overview: string
  backdrop_path: string
  cast: Cast
}

