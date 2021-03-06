import React from 'react'
import axios from 'axios';
import { 
    HomeDiv,
    BackgroundDiv,
    MovieListDiv
} from './styled-components';
import Background from '../Individual-Single-Components/Background/background';
import MovieList from '../Individual-Single-Components/MovieGrid/MovieList';
import SearchBar from '../Individual-Single-Components/Search/search';
import MovieThumbnail from '../Individual-Single-Components/Thumbnails/moviethumbnail';
import SortButton from '../Individual-Single-Components/sortedButton/sortedBtn';
import ReactGA from 'react-ga'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './HomeView.css';

function initializeReactGA() {
    ReactGA.initialize('UA-135427594-1');
    ReactGA.pageview('/');
  }


class HomeView extends React.Component {
    state = {
        movies: [], 
        sortBy: 'popular',
        backgroundImage: null,         
        searchTerm: '',

    }

    componentDidMount = () => {
        initializeReactGA();
        const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(getMovies)
            .then(res => {
                this.setState({
                    movies: res.data.results, 
                    backgroundImage: this.state.backgroundImage || res.data.results[Math.floor(Math.random() * 20)],                    
                })

            })
    }


    itemSearch = (searchTerm) => {
        let route = '';
        this.setState({
            movies: [],
            searchTerm
        })
        if (this.state.searchTerm === '') {
            route = `https://api.themoviedb.org/3/movie/${this.state.sortBy}?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`;
            //this will retrieve movies from api depending on state sortBy. If searchTerm is anything but an empty string, it moves to else statement. 
        } else {
            route = `https://api.themoviedb.org/3/search/movie?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&query=${this.state.searchTerm}`;
           
        }
        axios
            .get(route)
            .then(res => {
                this.setState({
                    movies:res.data.results,
                })
            })
        
    }

    updateSort = (e) => {
        e.preventDefault();
        const target = e.target.name
        if (this.state.searchTerm === '') {  //removes buttons if searchTerm exists
        const getMovies = `https://api.themoviedb.org/3/movie/${target}?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(getMovies)
            .then(res => {
                this.setState({
                    movies: res.data.results,     
                    sortBy:target,
                    backgroundImage: res.data.results[Math.floor(Math.random() * 20)]

                })
            })
        }

    }
    //update sort needs access to the state and will be passed to sortButton.

    upperCaseSort = (param) => {
        return param.replace('_', ' ').toUpperCase()
    }
    //function for rendering header tags based off of what sortBy on state is set to. 


    render() {
        return (
            <HomeDiv>
            {this.state.backgroundImage ? 
                <BackgroundDiv>
                    <ReactCSSTransitionGroup
                        transitionName='AppearTransition'
                        transitionAppear={true}
                        transitionAppearTimeout={2000}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        <Background 
                            image={`http://image.tmdb.org/t/p/w1280${this.state.backgroundImage.backdrop_path}`}
                            title={this.state.backgroundImage.original_title}
                            text={this.state.backgroundImage.overview}/> 
                        <SearchBar callback={this.itemSearch} />
                    </ReactCSSTransitionGroup>
                </BackgroundDiv> : null}
                <MovieListDiv>
                {this.state.searchTerm ? null : <SortButton active={this.state.sortBy} updateSort={this.updateSort}/>}
                    <MovieList 
                        header={this.state.searchTerm ? 'Search Results': `${this.upperCaseSort(this.state.sortBy)} MOVIES`}               
                    >
                        {this.state.movies.map((param, i) => {
                            return (
                                    <MovieThumbnail
                                        key={i}
                                        clickable={true}
                                        image={param.poster_path ? `http://image.tmdb.org/t/p/w500${param.poster_path}` : null}
                                        movieId={param.id}
                                    />
                            )
                                
                    })}
                    </MovieList>                   
                </MovieListDiv>
            </HomeDiv>
        )
    }
}

export default HomeView;
