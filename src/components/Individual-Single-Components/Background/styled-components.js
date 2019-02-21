import styled from 'styled-components'

export const BackgroundDiv = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    position: relative;

    @media(max-width: 700px) {
        height:400px;
    }

`;

export const BackgroundImgContent = styled.div`  
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
  

`;

export const BackgroundImgText = styled.div`    
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    color: #f4f4f3;
    font-family: sans-serif;

    h1 {
        @media(max-width:700px) {
            display:none
        }
    }

    p {
        @media(max-width:700px) {
            display:none
        }
    }
  

`;
  

  
