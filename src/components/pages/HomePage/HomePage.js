import React, { useState, useEffect } from 'react'
import { useMoviesData } from '../../../hooks/useMoviesData'
import Movies from '../../Movies/Movies/Movies';
import 'swiper/css';
import FeaturedMovie from '../../Movies/FeaturedMovie/FeaturedMovie';
import Header from '../../Header/Header';
import MainTemplate from '../../MainTemplate/MainTemplate';

const HomePage = () => {

    const { movies: popular, loading, error } = useMoviesData("/movie/popular");
    const { movies: upcoming } = useMoviesData("/movie/upcoming");
    const { movies: topRated } = useMoviesData("/movie/top_rated");
    const { movies: nowPlaying } = useMoviesData("/movie/now_playing");
    const { movies: popularTv } = useMoviesData("/tv/popular");

    const [featured, setFeatured] = useState();

    useEffect(() => {
        if (featured) return;

        featuredMovie()
    }, [popular])

    const featuredMovie = () => {
        if(!popular?.results) return;
        const result = Math.floor(Math.random() * popular.results.length);
        setFeatured(popular.results[result])
    }

    return (
        <MainTemplate>
            {/* {featured ? <FeaturedMovie featured={featured.results} /> : 'Loading'} */}

            <Movies title="Popular Movies" movies={popular?.results} />
            <Movies title="Upcoming Movies" movies={upcoming?.results} />
            <Movies title="Top Rated Movies" movies={topRated?.results} />
            <Movies title="Now Playing Movies" movies={nowPlaying?.results} />
            <Movies title="Popular Series" movies={popularTv?.results} />


        </MainTemplate>
    )
}

export default HomePage
