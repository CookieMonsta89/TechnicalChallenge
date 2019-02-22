import styled from 'styled-components';


export const ButtonDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-top:20px;
    
    @media(max-width:700px) {
        flex-direction:column;
        margin-top:0;
    }
`;

export const ButtonActive = styled.button`
    border-radius:30px;
    height:50px;
    width:25%;
    background:#1c1c1c;
    color:#ffa300;
    font-size:1.6rem;
    :focus {outline:0;}
    
    
    @media(max-width:700px) {
        border-radius:0px;
        border:0;
        width:100%
        height:75px
    }
`;

export const Button = styled.button`
    border-radius:30px;
    height:50px;
    width:25%;
    background:white;
    color:1c1c1c;
    font-size:1.6rem;
    color: #ffa300;
    border: 2px solid #ffa300;
    :focus {outline:0;}
    
    @media(max-width:700px) {
        border-radius:0px;
        width:100%;
        height:75px;
        border:0;
    }

`;