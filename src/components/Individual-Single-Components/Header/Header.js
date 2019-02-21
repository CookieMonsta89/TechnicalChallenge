import React from 'react'
import { 
    HeaderDiv,
    FlexDiv,
    Logo, 
} from './styled-components';

import logo from '../../../assets/logo.png'
// logo is a placeholder for now


const Header = () => {
    return (
        <HeaderDiv>
            <FlexDiv>
                <Logo alt='logo' src={logo} />
                <h1><strong><em>Ultimate</em></strong> MovieGoer</h1>
            </FlexDiv>
        </HeaderDiv>
    )
}

export default Header;