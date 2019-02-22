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



class HomeView extends React.Component {
    state = {
        movies: [], 
        sortBy: 'popular',
        backgroundImage: null,         
        searchTerm: '',

    }

    componentDidMount = () => {
        const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(getMovies)
            .then(res => {
                this.setState({
                    movies: res.data.results, 
                    backgroundImage: this.state.backgroundImage || res.data.results[0],                    
                })

            })
    }


    componentDidUpdate = () => {
        if (this.state.searchTerm === '') {  //removes buttons if searchTerm exists
        const getMovies = `https://api.themoviedb.org/3/movie/${this.state.sortBy}?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US&page=1`; //will grab the most popular movies 
        axios
            .get(getMovies)
            .then(res => {
                this.setState({
                    movies: res.data.results, 
                    backgroundImage: this.state.backgroundImage || res.data.results[0],                    
                })
            })
        }
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
        this.setState({
            sortBy: e.target.name
        })

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
                    <Background 
                        image={`http://image.tmdb.org/t/p/w1280${this.state.backgroundImage.backdrop_path}`}
                        title={this.state.backgroundImage.original_title}
                        text={this.state.backgroundImage.overview}/> 
                    <SearchBar callback={this.itemSearch} />
                </BackgroundDiv> : null}
                <MovieListDiv>
                {this.state.searchTerm ? null : <SortButton active={this.state.sortBy} updateSort={this.updateSort}/>}
                    <MovieList 
                        header={this.state.searchTerm ? 'Search Results': `${this.upperCaseSort(this.state.sortBy)} MOVIES`}                
                    >
                    {this.state.movies.map((param, i) => {
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
