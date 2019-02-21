import React from 'react'
import axios from 'axios';
import { 
    HomeDiv,
    BackgroundDiv,
    MovieListDiv
} from './styled-components';
import Background from '../Individual-Single-Components/Background/background';
import Header from '../Individual-Single-Components/Header/Header';
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
        currentPage: 0, 
        totalPages:0, 
        searchTerm: ''      //this is the searchterm for serach bar

    }

    componentDidMount = () => {
        const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(getPopular)
            .then(res => {
                this.setState({
                    popularMovies: res.data.results, 
                    backgroundImage: this.state.backgroundImage || res.data.results[0],
                    currentPage: res.page,
                    totalPages: res.total_pages
                    
                })
            })
    }

    itemSearch = (searchTerm) => {
        let route = '';
        this.setState({
            popularMovies: [],
            searchTerm
        })
        if (searchTerm === '') {
            route = `https://api.themoviedb.org/3/movie/popular?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`;
            
        } else {
            route = `https://api.themoviedb.org/3/search/movie?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&query=${searchTerm}`;
           
        }
        axios
            .get(route)
            .then(res => {
                this.setState({
                    popularMovies:res.data.results,
                })
            })
        
    }

    render() {
        return (
            <HomeDiv>
            {this.state.backgroundImage ? 
                <BackgroundDiv>
                    <Background 
                    image={`http://image.tmdb.org/t/p/w1280${this.state.backgroundImage.backdrop_path}`}
                    title={this.state.backgroundImage.original_title}
                    text={this.state.backgroundImage.overview}/> 
                    <SearchBar callback={this.itemSearch} />
                </BackgroundDiv> : null}
                <MovieListDiv>
                    <MovieList 
                        header={this.state.searchTerm ? 'Search Results': 'Popular Movies'}                
                    >
                    {this.state.popularMovies.map((param, i) => {
                        return <MovieThumbnail
                                    key={i}
                                    clickable={true}
                                    image={param.poster_path ? `http://image.tmdb.org/t/p/w500${param.poster_path}` : null}
                                    movieId={param.id} 
                                    movieName={param.original_title}
                                />
                    })}
                    </MovieList>
                </MovieListDiv>
            </HomeDiv>
        )
    }
}

export default HomeView;
