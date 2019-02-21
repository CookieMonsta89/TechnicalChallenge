import React from 'react'
import { HomeDiv } from './styled-components';
import Background from '../Individual-Single-Components/Background/background';
import Header from '../Individual-Single-Components/Header/Header';
import LoadButton from '../Individual-Single-Components/LoadButton/load';
import LoadAnimate from '../Individual-Single-Components/LoadingSpinner/loadanimate';
import MovieList from '../Individual-Single-Components/MovieGrid/MovieList';
import SearchBar from '../Individual-Single-Components/Search/search';
import MovieThumbnail from '../Individual-Single-Components/Thumbnails/moviethumbnail';



class HomeView extends React.Component {
    state = {

    }

    render() {
        return (
            <HomeDiv>
                <Background /> 
                <SearchBar />
                <MovieList /> 
                <LoadAnimate /> 
                <LoadButton />
            </HomeDiv>
        )
    }
}

<<<<<<< HEAD
export default HomeView;
=======
export default HomeView;
>>>>>>> c12575a6052af5978e932a26edf503f497a1419e
