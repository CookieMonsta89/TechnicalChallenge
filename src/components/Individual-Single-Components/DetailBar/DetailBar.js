import React from 'react'
import {
    DetailContainer,
    DetailDiv,
    InfoDiv
} from './styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
                <p><FontAwesomeIcon style={fontAwesomeSpan} icon={faClock} /> <strong>Runtime:</strong> {props.data.runtime} minutes</p>
                <p><FontAwesomeIcon style={fontAwesomeSpan} icon={faMoneyBill} /> <strong>Revenue:</strong> ${currencyFormat(props.data.revenue)}</p>
                <p><FontAwesomeIcon style={fontAwesomeSpan} icon={faCalendarAlt} /> <strong>Release:</strong> {props.data.release_date}</p>
                </InfoDiv>
            </DetailDiv>) : null}
        
        
        </DetailContainer>    
    )
}
 
export default DetailBar;

const fontAwesomeSpan = {
    color:'orange'
}