import React from 'react';
import {
    ActorContainer,
    MappedDiv,
    ActorImage,
    PTag
} from './styled-components';

const Actor = (props) => {

    const gender = (param) => {
        if (param === 1) {
            return 'Actress Name';
        } if (param === 2) {
            return 'Actor Name';
        }
    }

    return (         
        <ActorContainer>
            { props.actors ? (
                props.actors.map((param, i) => {
                    return <MappedDiv key={i}>
                                <PTag><strong>{gender(param.gender)}</strong> {param.name}</PTag>
                                <PTag><strong>Character Played:</strong> {param.character}</PTag>
                                <ActorImage src={`http://image.tmdb.org/t/p/w500/${param.profile_path}`} />
                            </MappedDiv>
                })) : null }
        </ActorContainer>
     );
}
 
export default Actor;