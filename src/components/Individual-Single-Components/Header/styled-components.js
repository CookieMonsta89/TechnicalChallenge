import styled from 'styled-components';

export const HeaderDiv = styled.div`
    background-color:#393939;
    width:100%;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    z-index: 1;

    @media(max-width:700px) {
        position:relative;
    }
`;

export const FlexDiv = styled.div`
    width:85%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#ffa300

    @media(max-width:700px) {
        flex-direction:column;
    }

    a {
        display:flex;
        align-items:center;
    }

    h1 {
        font-size:2rem;
        text-decoration:none;
        color:#ffa300;
        display:flex;
        align-items:center;
        
        @media(max-width:700px) {
            display:none
        }
    }
    
`;

export const TextDiv = styled.div`
    display:flex;
    align-items:center;
    font-weight:bold;
    @media(max-width:700px) {
        display:none;
    }

    h2 {
        font-family: cursive;
        font-size: 4rem;
        margin: 0;
        }
`;

export const Logo = styled.img` 
    width:30%;
    height:75%;
    
    @media(max-width:700px) {
        height:75%;
        margin:0 auto;
    }
`;

