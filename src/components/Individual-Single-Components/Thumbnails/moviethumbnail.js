import React from 'react';
import {ThumbnailDiv} from './styled-components'
import {Link} from 'react-router-dom'

const MovieThumbnail = (props) => {
    return (
        <ThumbnailDiv>
        {props.clickable ?
            <Link to={{pathname:`/${props.movieId}`, movieName: `${props.movieName}`}}>
                <img style={imgStyle} src={props.image} alt='moviethumb' /> 
            </Link>
            :
            <Link to={{pathname:`/${props.movieId}`, movieName: `${props.movieName}`}}>
                <img style={imgStyle} src={props.image} alt='moviethumb' /> 
            </Link>
        }

        </ThumbnailDiv>
    )
}

export default MovieThumbnail;

const imgStyle = {
    height:'100%',
    width:'100%'
}