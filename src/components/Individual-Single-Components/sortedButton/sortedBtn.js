import React from 'react';
import {
    ButtonDiv,
    ButtonActive,
    Button
} from './styled-components';



class SortButton extends React.Component {
    state = { 
        Active: 'popular'
        
     }

    clickHandler = (e) => {
        e.preventDefault();
        // this.props.updateSort();
        this.setState({
            Active: e.target.name
         })
     }

    renderActive = () => {
        if (this.state.Active === 'popular') {
            return ( 
            <ButtonDiv>        
                <ButtonActive onClick={this.clickHandler} name='popular'>Popular</ButtonActive>
                <Button onClick={this.clickHandler} name='top_rated'>Top Rated</Button>
                <Button onClick={this.clickHandler} name='now_playing'>Now Playing</Button>
            </ButtonDiv>
             );
            }
            if (this.state.Active === 'top_rated') {
                return (
                <ButtonDiv>        
                    <Button onClick={this.clickHandler} name='popular'>Popular</Button>
                    <ButtonActive onClick={this.clickHandler} name='top_rated'>Top Rated</ButtonActive>
                    <Button onClick={this.clickHandler} name='now_playing'>Now Playing</Button>
                </ButtonDiv>
                );
            }
            if (this.state.Active === 'now_playing') {
                return (
                    <ButtonDiv>        
                        <Button onClick={this.clickHandler} name='popular'>Popular</Button>
                        <Button onClick={this.clickHandler} name='top_rated'>Top Rated</Button>
                        <ButtonActive onClick={this.clickHandler} name='now_playing'>Now Playing</ButtonActive>
                    </ButtonDiv>
                )
            }
        }

    render() { 
    return (
        <div>
            {this.renderActive()}
        </div>
    )
    }
}
 
export default SortButton;