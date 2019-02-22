import React from 'react';
import {Link} from 'react-router-dom';
import {
    NavDiv,
    NavLinkDiv
} from './styled-components';

const Nav = () => {
    return ( 
        <NavDiv>
            <NavLinkDiv>
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </NavLinkDiv>
        </NavDiv>
     );
}
 
export default Nav;