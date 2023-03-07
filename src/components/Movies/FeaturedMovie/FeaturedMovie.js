import React from 'react'
import * as Styled from './styles'

const FeaturedMovie = ({ featured }) => {
    return (
        <div>
            <Styled.Wrapper>

                <img src={`https://image.tmdb.org/t/p/w500/${featured.poster_path} `} alt={featured.title ? featured.title : featured.name} />
                <div>
                    <div>
                        <div>{featured.title}</div>
                        <p>{featured.overview}</p>
                    </div>
                    <Styled.Rating>
                        <p>Vote average {featured.vote_average}</p>
                        <p>{featured.vote_count}</p>
                    </Styled.Rating>
                </div>
            </Styled.Wrapper>
        </div>
    )
}

export default FeaturedMovie
