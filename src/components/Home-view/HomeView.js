import React from 'react'
import axios from 'axios';
import {
    API_KEY,
    API_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE

} from '../config'
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
        popularMovies: [],
        topRatedMovies: [],
        nowPlayingMovies:[], 
        popular: true,
        topRated: false,
        nowPlaying: false,       //will eventually set fetched movie data to this array
        backgroundImage: null,          //will pull in image for background from the database
        loading: false,    //set to false and will need set to true when fetching is in progress
        currentPage: 0, 
        totalPages:0, 
        searchTerm: ''      //this is the searchterm for serach bar

    }

    componentDidMount = () => {
        this.setState({
            loading: true
        });
        const route = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(route)
            .then(res => {
                this.setState({
                    movies: res.data  //setting empty array in state to the new data
                })
            })
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
