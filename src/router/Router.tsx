import { Routes, Route } from 'react-router-dom'
import { MoviesProvider } from '../context/MoviesContext'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Home from '../pages/Home/Home'

const Router = () => {
  return (
    <MoviesProvider>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
      </Routes>
    </MoviesProvider>
  )
}

export default Router