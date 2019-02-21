import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return ( 
        <div>
            <Link to='/'>
                <p>Home</p>
            </Link>
        </div>
     );
}
 
export default Nav;