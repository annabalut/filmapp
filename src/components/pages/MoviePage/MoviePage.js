import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMoviesData } from '../../../hooks/useMoviesData';
import * as Styled from './styles'

const MoviePage = () => {
  const params = useParams();
  const { movies: movie, loading, error } = useMoviesData(`/movie/${params.id}`);
  console.log(movie)

  useEffect(() => {

  })

  if (!movie) return

  return (
    <Styled.Wrapper>

      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt={movie.title ? movie.title : movie.name} />
        <div>
          <h1>{movie.title}</h1>
          <h4>Original title: {movie.original_title}</h4>
         <p>{(movie.genres).map((genre, index) => <p key={index}>{genre.name}</p>)}</p>
          <div>{movie.overview}</div>
          <div>
            <h5>Vote average: {movie.vote_average}</h5>
            <h5>Vote count: {movie.vote_count}</h5>
          </div>
              <Styled.NaviLink to={movie.homepage}>
                {movie.title} homepage
              </Styled.NaviLink>
        </div>
      </div>
    </Styled.Wrapper>
  )
}

export default MoviePage