import React from 'react';
import {Component} from 'react'; 

import styled from 'styled-components';
import Logo from "./logo.png";

const Image = styled.img`
    width: 30em;
    height: 30em;
    align-items: center;
  
`
const Title = styled.h1`
    text-align: center;
`


class HomePage extends Component {
    render() {
        return (
            <div>
                <Title>Welcome to ReactionTime</Title>
                <Image
                 src={Logo} alt="ReactionTime Logo"
                 >
                 </Image>
            </div>
        )
    }
}

export default HomePage; 



