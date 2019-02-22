import React from 'react'
import { 
    HeaderDiv,
    FlexDiv,
    Logo, 
    TextDiv
} from './styled-components';
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <HeaderDiv>
            <FlexDiv>
                <Link to='/' >
                    <Logo alt='logo' src={logo} />
                </Link>
                <TextDiv>Ultimate <h2>MovieGoer</h2></TextDiv>               
            </FlexDiv>
        </HeaderDiv>
    )
}

export default Header;

