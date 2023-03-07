import styled from "styled-components";
import MovieCard from "../../Movies/MovieCard/MovieCard";

export const SearchDiv = styled.div`
margin-left: 60px;
margin-right: 60px;
`
export const MovieView = styled.div`
    /* display: flex;
    justify-content: space-between;
    gap: 20px; */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    


`
// export const OneMovie = styled(MovieCard)`
//     width: 30px;
// `
