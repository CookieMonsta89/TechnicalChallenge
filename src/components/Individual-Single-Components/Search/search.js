import React from 'react'
import { 
    SearchBarDiv,
    SearchContent,
    SearchInput
} from './styled-components';



class SearchBar extends React.Component {
    state = {
        value: '',

    }

    timeout = null

    searchMovie = (e) => {
        this.setState({
            value: e.target.value
        })        
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        },1000) //setTimeout allows for search every 1000 ms
    }

    render() {
        return (
            <SearchBarDiv>
                <SearchContent>
                    <SearchInput 
                        type='text'
                        placeholder='Search'
                        onChange={this.searchMovie}
                        value={this.state.value}
                    />
                </SearchContent>
            </SearchBarDiv>
        )
    }

}

export default SearchBar;