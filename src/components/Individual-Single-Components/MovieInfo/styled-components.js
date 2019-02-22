import styled from 'styled-components'

export const MovieInfoContainer = styled.div`

`;

export const MovieInfoDiv = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 776px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const OpacityDiv = styled.div`
    width:80%;
    background-color:#0e0d0c;
    opacity:0.75;
    color:#f4f4f3
    display:flex;
    justify-content:center;
    padding:0 20px;

    @media(max-width:500px) {
        font-size:1rem;
    }

`;

export const InnerOpacityDiv = styled.div`
    h1 {
        font-size:2rem

        @media(max-width:500px) {
            font-size:1.3rem;
        }
    }
`;