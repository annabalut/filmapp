import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import * as Styled from './styles';

const Movies = ({ movies,title }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            width:640,
            slidesPerView:2
          },
          768: {
            width:768,
            slidesPerView:3
          },
          992: {
            width:992,
            slidesPerView:3
          }
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default Movies;
