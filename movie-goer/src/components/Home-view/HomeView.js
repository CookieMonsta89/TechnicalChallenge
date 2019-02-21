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

export default HomeView;