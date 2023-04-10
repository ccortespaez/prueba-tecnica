import { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MoviesContext'
import { getCast } from '../../api/api'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Cast } from '../../interfaces/interfaces';
import './index.scss'

const MovieDetail = () => {
  const navigate = useNavigate();
  const { selectedMovie: { title, poster_path, backdrop_path, overview, id, cast }, setSelectedMovie } = useContext(MovieContext)
  const backdropImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
  const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`

  const loadCast = async () => {
    const data = await getCast(id);
    setSelectedMovie(prevState => ({ ...prevState, cast: data.cast }))
  };

  useEffect(() => {
    loadCast()
  }, [])

  const renderCast = () => {
    return cast?.map(({ name, profile_path: profilePath }: Cast) => {
      const castImage = `https://image.tmdb.org/t/p/w500/${profilePath}`
      return (
        <Swiper slidesPerView={4}>
          <SwiperSlide>
            <div className="movie__cast-info">
              <img src={castImage} className="movie__cast-image" />
              <span className="movie__cast-name">{name}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      )
    })
  }

  const redirectToHomeWhenLoseData = () => {
    navigate("/")
  }

  return (
    <>
      {
        (title) ? (
          <>
            <img src={backdropImage} className='movie__backdrop' />
            <div className="movie">
              <div className="movie__container">
                <img className="movie__poster" src={posterImage} alt="image-movie" />
                <div className="movie__data">
                  <h2 className="movie__title">{title}</h2>
                  <p className="movie__overview">{overview}</p>
                  <Swiper slidesPerView={6}>
                    {renderCast()}
                  </Swiper>
                </div>
              </div>
            </div>
          </>
        ) :
          redirectToHomeWhenLoseData()
      }

    </>
  )
}

export default MovieDetail