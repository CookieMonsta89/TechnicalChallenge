import styled from 'styled-components';

export const SearchBarDiv = styled.div`
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #f4f4f3
`;

export const SearchContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 55px;
    background:#353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const SearchInput = styled.input`
    font-size: 2.8rem;
    position: absolute;   
    border:0 solid #ffa300;
    background: transparent;
    height: 40px;
    color:#f4f4f3  
    text-align:center;
    color: #ffa300;
    font-size: 35px;
    width:95%;

`;

