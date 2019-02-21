import styled from 'styled-components';

export const HeaderDiv = styled.div`
    background-color:#423e3c;
    width:100%;
    display:flex;
    justify-content:center;
`;

export const FlexDiv = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#f4f4f3

    @media(max-width:700px) {
        flex-direction:column;
    }

    h1 {
        font-size:2rem;
        @media(max-width:700px) {
            font-size:1.6rem;
        }
    }
    
`;

export const Logo = styled.img` 
    width:25%;
    height:75%;
    @media(max-width:700px) {
        height:50%;
    }
`;

