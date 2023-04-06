import { useState, useContext, useEffect, ReactNode } from 'react'
import { MovieContext } from '../../context/MoviesContext'
import { getCast } from '../../api/api'
import './styles.scss'

const MovieDetail = () => {
  const [cast, setCast] = useState<[]>([])
  const { selectedMovie: { title, posterPath, backdropPath, overview, id} } = useContext(MovieContext)

  const backdropImage = `https://image.tmdb.org/t/p/w500/${backdropPath}`
  const posterImage = `https://image.tmdb.org/t/p/w500/${posterPath}`

  const loadCast = async () => {
    const data = await getCast(id);
    setCast(data.cast)
  };

  useEffect(() => {
    loadCast()
  }, [])

  const renderCast = (): ReactNode => {
    const actorPhoto = `https://image.tmdb.org/t/p/w500/`
    return cast?.map(({ name, profile_path: profilePath }) => (
      <>
        <span>
        {name}
      </span>
      <img src={`${actorPhoto}/${profilePath}`} alt="actor-image" />
      </>
    ))
  }

// console.log(castData.map(({name}) => name))
  return (
    <>
    <div className="backdrop" style={{backgroundImage: `url(${backdropImage})`}}>
      <div className="movie">
        <div className="movie__container">
          <img className="movie__poster" src={posterImage} alt="image-movie"/>
          <div className="movie__data">
            <h2 className="movie__title">{title}</h2>
            <p className="movie__overview">{overview}</p>
            {/* {renderCast()} */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetail