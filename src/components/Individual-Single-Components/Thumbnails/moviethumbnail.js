import React from 'react';
import {ThumbnailDiv} from './styled-components'

const MovieThumbnail = (props) => {
    return (
        <ThumbnailDiv>
            <img style={imgStyle}src={props.image} alt='moviethumb' /> 
        </ThumbnailDiv>
    )
}

export default MovieThumbnail;

const imgStyle = {
    height:'100%',
    width:'100%'
}