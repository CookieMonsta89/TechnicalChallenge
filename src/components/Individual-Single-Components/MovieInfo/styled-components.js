import styled from 'styled-components'

export const MovieInfoContainer = styled.div`

`;

export const MovieInfoDiv = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const OpacityDiv = styled.div`
    width:80%;
    height:auto;
    background-color:rgb(66,62,60);opacity:0.9;
    color:#f4f4f3
    display:flex;
    justify-content:center;
    padding:20px

`;

export const InnerOpacityDiv = styled.div`
    h1 {
        font-size:2rem
    }
`;