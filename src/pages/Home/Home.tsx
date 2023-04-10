import { useState, useContext, useEffect, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { getPopularMovies } from '../../api/api'
import { MovieContext } from '../../context/MoviesContext'
import { widthScreen } from '../../helpers'
import CarouselCard from './components/CarouselCard/CarouselCard'
import Card from '../../components/Card/Card'
import './index.scss'
import { Movie } from '../../interfaces/interfaces'

const Home = () => {

  const { popularMovies, setPopularMovies, setSelectedMovie } = useContext(MovieContext)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const loadPopularMovies = async () => {
    const data = await getPopularMovies()
    setPopularMovies(data.results)
  }

  const handleSelectedMovie = (movie: SetStateAction<Movie>) => {
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
    return popularMovies.map(({ title, id, poster_path, backdrop_path, overview }) => (
      <Link to={`/movie/${id}`}>
        <Card width={true} title={title} image={poster_path} handleClick={() => handleSelectedMovie({ id, title, poster_path, backdrop_path, overview, cast:[], setSelectedMovie})} />
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