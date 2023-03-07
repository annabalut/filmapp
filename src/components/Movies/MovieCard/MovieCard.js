import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Styled from './styles'

const MovieCard = ({ movie }) => {
  const [textVisible, setTextVisible] = useState(true);

  const handleVisibleChange = () => setTextVisible(false);
  const handleInvisibleChange = () => setTextVisible(true);

  console.log(movie);
  return (
    <Styled.Navi to={`/movie/${movie.id}`}>
      {/* <Styled.Wrapper>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt={movie.title ? movie.title : movie.name} />
          <div>
            <h3>{movie.title ? movie.title : movie.name}</h3>
            <h3>{movie.vote_average}</h3>
          </div>
        </div>
        <Styled.Box>
          <span>{movie.release_date ? movie.release_date : movie.first_air_date}</span>
        </Styled.Box>
      </Styled.Wrapper> */}
      {textVisible ?
      <Styled.Wrapper onMouseEnter={handleVisibleChange} onMouseLeave={handleInvisibleChange}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt={movie.title ? movie.title : movie.name} />
          <div>
            <h3>{movie.title ? movie.title : movie.name}</h3>
            <h3>{movie.vote_average}</h3>
          </div>
        </div>
        <Styled.Box>
          <span>{movie.release_date ? movie.release_date : movie.first_air_date}</span>
        </Styled.Box>
      </Styled.Wrapper>
      :
      <Styled.Wrapper onMouseEnter={handleVisibleChange} onMouseLeave={handleInvisibleChange}>
        <div>{movie.overview}</div>
      </Styled.Wrapper>
      }
    </Styled.Navi>
  )
}

export default MovieCard
