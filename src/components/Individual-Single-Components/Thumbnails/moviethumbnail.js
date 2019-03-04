import React from 'react';
import {ThumbnailDiv} from './styled-components'
import {Link} from 'react-router-dom'

const MovieThumbnail = (props) => {
    return (
        <ThumbnailDiv>
        {props.clickable ?
            <Link to={`/${props.movieId}`}>
                <img style={imgStyle} src={props.image} alt='moviethumb' /> 
            </Link>
            :
            <Link to={`/${props.movieId}`}>
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