import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/pages/HomePage/HomePage'
import MoviePage from './components/pages/MoviePage/MoviePage'
import SearchPage from './components/pages/SearchPage/SearchPage'
import { useMoviesData } from './hooks/useMoviesData'

const App = () => {
  // const { movies, loading, error } = useMoviesData("/popular")
  // console.log(movies, error)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie/:id' element={<MoviePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
