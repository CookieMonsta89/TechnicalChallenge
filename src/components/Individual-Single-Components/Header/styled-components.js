import styled from 'styled-components';

export const HeaderDiv = styled.div`
    background-color:#393939;
    width:100%;
    display:flex;
    justify-content:center;
`;

export const FlexDiv = styled.div`
    width:90%;
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
        @media(max-width:700px) {
            display:none
        }
    }
    
`;

export const Logo = styled.img` 
    width:25%;
    height:75%;
    @media(max-width:700px) {
        height:75%;
        margin:0 auto;
    }
`;

