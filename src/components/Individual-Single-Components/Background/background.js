import React from 'react';
import {
    BackgroundDiv,
    BackgroundImgContent,
    BackgroundImgText
} from './styled-components';

const Background = (props) => {
    return (
        <BackgroundDiv style={{
                background:`
                linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                url('${props.image}')` //this style sets background to the image passed down from homeview. 
        }}>
            <BackgroundImgContent>
                <BackgroundImgText>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </BackgroundImgText>
            </BackgroundImgContent>
        </BackgroundDiv>
    )
}


export default Background;
