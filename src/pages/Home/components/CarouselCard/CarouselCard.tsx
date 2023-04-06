import { useEffect, ReactNode, useContext } from 'react';
import { getUpcomingMovies } from '../../../../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieContext } from '../../../../context/MoviesContext';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import 'swiper/css';

const CarouselCard = () => {

  const { movies, setMovies, page, setPage, setSelectedMovie } = useContext(MovieContext)

  const loadUncomingMovies = async () => {
    const moviesData = await  getUpcomingMovies(page);
    setMovies((prevMovies: []) => [...prevMovies, ...moviesData.results]);
  };

  useEffect(() => {
    loadUncomingMovies()
  }, [page])

  const handleSelectedMovie = (movie: any) => {
    setSelectedMovie(movie)
  }

  const renderMovies = (): ReactNode => {
    return movies?.map(({ title, id, poster_path: posterPath, backdrop_path: backdropPath, overview }) =>
      <SwiperSlide>
        <Link to={`/movie/${id}`}>
          <Card title={title} image={posterPath} handleClick={() => handleSelectedMovie({ id, title, posterPath, backdropPath, overview, setSelectedMovie })} />
        </Link>
      </SwiperSlide>)
  }

  return (
    <>
      {
        movies ? (
          <Swiper
            spaceBetween={5}
            slidesPerView={5}
            onReachEnd={() => setPage(page + 1)}
          >
            {renderMovies()}
          </Swiper>
        ) : (
          <h1>problema al cargar las peliculas</h1>
        )
      }
    </>
  )
}

export default CarouselCard