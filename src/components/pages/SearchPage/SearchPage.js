import React, { useEffect, useState } from 'react'
import MainTemplate from '../../MainTemplate/MainTemplate';
import MovieCard from '../../Movies/MovieCard/MovieCard';
import Movies from '../../Movies/Movies/Movies';
import * as Styled from './styles'

const SearchPage = ({ movie }) => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let debounce = null;
        debounce = setTimeout(() => {
            getData()
        }, 2000);
        return () => clearInterval(debounce)
    }, [query])

    const getData = async () => {
        const key = process.env.REACT_APP_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`);
        const data = await res.json();
        setMovies(data.results);
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (

        <MainTemplate>
            <Styled.SearchDiv>
                <input value={query} onChange={handleChange} placeholder='Search movie' />
                <div>
                    <h3>Search results</h3>
                    <Styled.MovieView>
                        {!movies.length ? <p>Movie not found</p> : movies.map((movie) => <MovieCard key={movie.id} movie={movie}>{movie.title}</MovieCard>)}
                    </Styled.MovieView>
                    {/* {!movies.length ? <p>Movie not found</p> : <Movies movies={movies} />} */}
                </div>
            </Styled.SearchDiv>
        </MainTemplate>
    )
}

export default SearchPage
