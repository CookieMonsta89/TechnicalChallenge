import styled from 'styled-components';

export const DetailContainer = styled.div`
    width:100%;
    background: #393939
    height:auto;
`;

export const DetailDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;

`;

export const InfoDiv = styled.div`
    display:flex;
    justify-content:space-around
    width:100%;
    @media(max-width:600px) {
        flex-direction:column;
        align-items:center;
    }
    
    p {
        font-size:1.6rem;
        color:white;
        
        @media(max-width:1000px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        @media(max-width:600px) {
            display: flex;
            flex-direction: row;
            width:100%;
            justify-content:space-evenly;
            border-bottom:1px solid orange;
            margin:0;
            height:100px;
        }
    }
`;