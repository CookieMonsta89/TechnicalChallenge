import React from 'react'
import {
    DetailContainer,
    DetailDiv,
    InfoDiv
} from './styled-components';

const DetailBar = (props) => {

    const currencyFormat = (param) => {
        return param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    //function for adding commas to number returned from database for revenue
    

    return ( 
        <DetailContainer>
        {props.data ? (
            <DetailDiv>
                <InfoDiv>
                <p><strong>Runtime:</strong> {props.data.runtime} minutes</p>
                <p><strong>Revenue:</strong> ${currencyFormat(props.data.revenue)}</p>
                <p><strong>Release:</strong> {props.data.release_date}</p>
                </InfoDiv>
            </DetailDiv>) : null}
        
        
        </DetailContainer>    
    )
}
 
export default DetailBar;