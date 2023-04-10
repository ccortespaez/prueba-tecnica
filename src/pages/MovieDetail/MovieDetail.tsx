import { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MoviesContext'
import { getCast } from '../../api/api'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.scss'

const MovieDetail = () => {
  const navigate = useNavigate();
  const { selectedMovie: { title, posterPath, backdropPath, overview, id, cast }, setSelectedMovie } = useContext(MovieContext)
  const backdropImage = `https://image.tmdb.org/t/p/w500/${backdropPath}`
  const posterImage = `https://image.tmdb.org/t/p/w500/${posterPath}`

  const loadCast = async () => {
    const data = await getCast(id);
    setSelectedMovie(prevState => ({ ...prevState, cast: data.cast }))
  };

  useEffect(() => {
    loadCast()
  }, [])

  const renderCast = () => {
    return cast?.map(({ name, profile_path: profilePath }) => {
      const castImage = `https://image.tmdb.org/t/p/w500/${profilePath}`
      return(
        <Swiper slidesPerView={6}>
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
        (title || posterImage || backdropImage, overview) ? (
          <>
            <img src={backdropImage} className='movie__backdrop' />
            <div className="movie">
                <img className="movie__poster" src={posterImage} alt="image-movie" />
                <div className="movie__data">
                  <h2 className="movie__title">{title}</h2>
                  <p className="movie__overview">{overview}</p>
                  <div className="movie__cast-group">
                  <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

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