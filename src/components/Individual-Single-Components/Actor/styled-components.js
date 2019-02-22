import styled from 'styled-components';

export const ActorContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

export const MappedDiv = styled.div`
    width:25%;
    display:flex;
    flex-direction:column-reverse;
    margin: 20px 0;
    border:1px solid black;
    justify-content:flex-end;
    padding:20px;
    height:auto;
    background-color:#393939;
    color:white;
    align-items:center;
    border-radius:5px;
`;

export const PTag = styled.p`
    font-size:1.6rem;
`;

export const ActorImage = styled.img`
    width:95%;
    height:50%;
`;