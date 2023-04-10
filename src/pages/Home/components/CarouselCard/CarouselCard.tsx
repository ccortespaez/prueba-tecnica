import { useEffect, ReactNode, useContext, SetStateAction } from 'react';
import { getUpcomingMovies } from '../../../../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieContext } from '../../../../context/MoviesContext';
import { Link } from 'react-router-dom'
import Card from '../../../../components/Card/Card';
import 'swiper/css';
import './index.scss'
import { Movie } from '../../../../interfaces/interfaces';

const CarouselCard = () => {

  const { movies, setMovies, page, setPage, setSelectedMovie } = useContext(MovieContext)

  const loadUncomingMovies = async () => {
    const moviesData = await getUpcomingMovies(page);
    setMovies((prevMovies: Movie[]) => [...prevMovies, ...moviesData.results]);
  };

  useEffect(() => {
    loadUncomingMovies()
  }, [page])

  const handleSelectedMovie = (movie: SetStateAction<Movie>) => {
    setSelectedMovie(movie)
  }

  const renderMovies = (): ReactNode => {
    return movies?.map(({ title, id, poster_path, backdrop_path, overview }) =>
      <SwiperSlide>
        <Link to={`/movie/${id}`}>
          <Card image={poster_path} handleClick={() => handleSelectedMovie({ id, title, poster_path, backdrop_path, overview, cast:[], setSelectedMovie })} />
        </Link>
      </SwiperSlide>)
  }

  return (
    <>
      {
        movies ? (
          <div className="carousel__container">
            <Swiper
              slidesPerView={6}
              onReachEnd={() => setPage(page + 1)}
            >
              {renderMovies()}
            </Swiper>
          </div>
        ) : (
          <h1>problema al cargar las peliculas</h1>
        )
      }
    </>
  )
}

export default CarouselCard