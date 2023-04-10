import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPopularMovies } from '../../api/api'
import { MovieContext } from '../../context/MoviesContext'
import { widthScreen } from '../../helpers'
import CarouselCard from './components/CarouselCard/CarouselCard'
import Card from '../../components/Card/Card'
import './index.scss'

const Home = () => {

  const { popularMovies, setPopularMovies, setSelectedMovie } = useContext(MovieContext)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const loadPopularMovies = async () => {
    const data = await getPopularMovies()
    setPopularMovies(data.results)
  }

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie)
  }

  useEffect(() => {
    loadPopularMovies()
  }, [])

  useEffect(() => {
    widthScreen(setScreenWidth)
  }, []);

  console.log(screenWidth)

  const renderPopularMovies = () => {
    return popularMovies.map(({ title, id, poster_path: posterPath, backdrop_path: backdropPath, overview }) => (
      <Link to={`/movie/${id}`}>
        <Card width={true} title={title} image={posterPath} handleClick={() => handleSelectedMovie({ id, title, posterPath, backdropPath, overview, setSelectedMovie})} />
      </Link>
    )
    )
  }

  return (
    <>
    <div className="home">
      <div className="home__container">
        <span className="home__subtitle">Bienvenido a</span>
        <h1 className="home__title">The <span className="home__title--red">MovieDB</span><br/> API</h1>
        <span className="home__span">Coded and Designed By <span className="home__span--red">Cristóbal Cortés</span></span>
      </div>
      <CarouselCard/>
    </div>
    <div className="card-group">
      {renderPopularMovies()}
    </div>
    </>
  )
}

export default Home