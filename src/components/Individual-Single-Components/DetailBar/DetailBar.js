import React from 'react'
import {
    DetailContainer,
    DetailDiv,
    InfoDiv
} from './styled-components';

const DetailBar = (props) => {

    const currencyFormat = (param) => {
        const array = param.toString(param).split('')
        const next = array.splice(4, 0, ',').join('')
        return next
    }

    return ( 
        <DetailContainer>
        { props.data ? (
            <DetailDiv>
                <InfoDiv>
                <p>Runtime: {props.data.runtime} minutes</p>
                <p>Revenue: ${props.data.revenue}</p>
                <p>Release: {props.data.release_date}</p>
                </InfoDiv>
            </DetailDiv>) : null}
        
        
        </DetailContainer>
    
        )
}
 
export default DetailBar;