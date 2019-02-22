import React from 'react';
import {
    MovieInfoContainer,
    MovieInfoDiv,
    OpacityDiv, 
    InnerOpacityDiv
} from './styled-components.js';

const MovieInfo = (props) => {


    return (
        <MovieInfoContainer>
        { props.info ? (
        <MovieInfoDiv style={{
            background:`
                linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                url('http://image.tmdb.org/t/p/w1280/${props.info.backdrop_path}'            
            )`
        }}>
            
            <OpacityDiv>
                <InnerOpacityDiv>
                    <h1>{props.info.title}</h1>
                    <p>Summary</p>
                    <p>{props.info.overview}</p>
                    <p>IMDB Rating:  {props.info.vote_average}  </p>
                    <p><strong>DIRECTORS</strong></p>
                    {props.director.map((param, i) => {
                        return (
                            <p key={i}>{param.name}</p>
                        )
                    })}
                    

                    
                </InnerOpacityDiv>
            </OpacityDiv>
            
        </MovieInfoDiv>) : null}
        </MovieInfoContainer>
    )
}

export default MovieInfo;


