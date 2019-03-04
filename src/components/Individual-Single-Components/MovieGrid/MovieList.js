import React from 'react';
import { 
    MovieListDiv,
    MovieContent,
    MappedMovies
 } from './styled-components';
 




const MovieList = (props) => {

    const renderMovies = () => {
        const movieElements = props.children.map((param, i) => {
            return (
                <MappedMovies key={i}>
                   {param}
                </MappedMovies>
            )
        })
        return movieElements
    }

    return (
        <MovieListDiv>
            {props.header ? <h1>{props.header}</h1> : null }
            <MovieContent>
                {renderMovies()}
            </MovieContent>
        </MovieListDiv>
    )
}

export default MovieList;


                        
