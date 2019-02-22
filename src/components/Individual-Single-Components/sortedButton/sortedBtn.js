import React from 'react';
import {
    ButtonDiv,
    ButtonActive,
    Button
} from './styled-components';



const SortButton = (props) => {

    const renderActive = () => {
        //conditional render for buttons based off of value for the props passed in. 
            if (props.active === 'popular') {
                return ( 
                    <ButtonDiv>        
                        <ButtonActive onClick={props.updateSort} name='popular'>Popular</ButtonActive>
                        <Button onClick={props.updateSort} name='top_rated'>Top Rated</Button>
                        <Button onClick={props.updateSort} name='now_playing'>Now Playing</Button>
                    </ButtonDiv>
                );
            }
            if (props.active === 'top_rated') {
                return (
                    <ButtonDiv>        
                        <Button onClick={props.updateSort} name='popular'>Popular</Button>
                        <ButtonActive onClick={props.updateSort} name='top_rated'>Top Rated</ButtonActive>
                        <Button onClick={props.updateSort} name='now_playing'>Now Playing</Button>
                    </ButtonDiv>
                );
            }
            if (props.active === 'now_playing') {
                return (
                    <ButtonDiv>        
                        <Button onClick={props.updateSort} name='popular'>Popular</Button>
                        <Button onClick={props.updateSort} name='top_rated'>Top Rated</Button>
                        <ButtonActive onClick={props.updateSort} name='now_playing'>Now Playing</ButtonActive>
                    </ButtonDiv>
                )
            }
        }

    
    return (
        <div>
            {renderActive()}
        </div>
    )
}
 
export default SortButton;