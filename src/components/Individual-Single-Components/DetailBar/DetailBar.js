import React from 'react'
import {
    DetailContainer,
    DetailDiv
} from './styled-components';

const DetailBar = (props) => {
    return ( 
        <DetailContainer>
        { props.info ? (
            <DetailDiv>
                hello
            </DetailDiv>) : null}
        
        
        </DetailContainer>
    
        )
}
 
export default DetailBar;