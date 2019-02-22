import styled from 'styled-components';

export const ActorContainer = styled.div`
    width:100%;
`;

export const ColoredDiv = styled.div`
    max-width:1280px;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    
    @media(max-width:768px) {
        justify-content:space-evenly
    }
`;

export const MappedDiv = styled.div`
    width:21%;
    display:flex;
    flex-direction:column-reverse;
    margin: 20px 0;
    justify-content:flex-end;
    padding:10px;
    height:600px;
    background-color: #393939;
    color:white;
    align-items:center;
    border-radius:5px;
    
    @media(max-width:1000px) {
        width:30%;
    }
    
    @media(max-width:768px) {
        width:40%;
        height:550px;
    }
    
    @media(max-width:600px) {
        width:80%;
        height:650px;
        
    }
`;

export const PTag = styled.p`
    font-size:1.6rem;
    margin-top:5px;
    width:100%;
`;

export const ActorImage = styled.img`
    width:100%;
    height:60%;
`;