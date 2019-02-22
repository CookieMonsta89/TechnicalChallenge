import React from 'react';
import {
    ActorContainer,
    MappedDiv,
    ActorImage,
    PTag,
    ColoredDiv
} from './styled-components';
import backupImg from '../../../assets/backupImg.png'

const Actor = (props) => {

    const gender = (param) => {
        if (param === 1) {
            return 'Actress Name';
        } if (param === 2) {
            return 'Actor Name';
        } else {
            return 'Name';
        }
    }
    //trivial function to return actor vs actress depeding on gender from database. 

    return (         
        <ActorContainer>
            <ColoredDiv>
            {props.actors ? (
                props.actors.map((param, i) => {
                    return <MappedDiv key={i}>
                                <PTag><strong>{gender(param.gender)}</strong> {param.name}</PTag>
                                <PTag><strong>Character Played:</strong> {param.character}</PTag>
                                {param.profile_path ?
                                <ActorImage src={`http://image.tmdb.org/t/p/w500/${param.profile_path}`}/> : <ActorImage src={backupImg} /> }
                            </MappedDiv>
            })) : null }
            </ColoredDiv>
        </ActorContainer>
     );
}

//this component is for rendering the list of actors depending on which movie is currenly selected. 
 
export default Actor;