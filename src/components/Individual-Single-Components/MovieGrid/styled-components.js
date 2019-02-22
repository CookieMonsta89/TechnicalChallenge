import styled from 'styled-components';

export const MovieListDiv = styled.div`
    
`;

export const MovieContent = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:0 5px;
    @media(max-width:700px) {
        justify-content:space-evenly;
    }
`;

export const MappedMovies = styled.div`
    width:21%;
    margin: 20px 0;
    @media(max-width:700px) {
        width:45%;
    }
    @media(max-width:500px) {
        width:90%;
    }
`;