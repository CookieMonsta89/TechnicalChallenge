import React from 'react';
import MovieInfo from '../Individual-Single-Components/MovieInfo/MovieInfo'
import DetailBar from '../Individual-Single-Components/DetailBar/DetailBar'
import Actor from '../Individual-Single-Components/Actor/Actor'
import axios from 'axios';


class MovieDetails extends React.Component {
    state = { 
        movie: null,
        actors: null,
        directors: []
     }

    componentDidMount = () => {
        const route = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US`
        axios
            .get(route)
            .then(res => {
                this.setState({
                    movie: res.data 
                }, () => {
                    const endpoint = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=036b0cc475e78b3c1534667fd1c67e97&language=en-US`
                    axios
                        .get(endpoint)
                        .then(res => {
                            const directors = res.data.crew.filter((director) => director.job === "Director");
                            this.setState({
                                actors: res.data.cast,
                                directors
                        })
                    })
                })
                
            })
            .catch(err => console.log(err))
     }

    render() { 
        return ( 
            <div>
                <MovieInfo info={this.state.movie} director={this.state.directors}/>
                <DetailBar data={this.state.movie} />                
                <Actor actors={this.state.actors}/>
            </div>
         );
    }
}
 
export default MovieDetails;