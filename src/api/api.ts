import { BASE_URL, API_KEY } from "./constants"

export const getUpcomingMovies = async (page: number) => {
  const res = await fetch(`${BASE_URL}upcoming?api_key=${API_KEY}&language=es-ES&page=${page}`)
  const data = await res.json()
  return data
}

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`)
  const data = await res.json()
  return data
}

export const getCast = async (id: number) => {
  const res = await fetch(`${BASE_URL}${id}/credits?api_key=${API_KEY}&language=es-ES`)
  const data = await res.json()
  return data
}