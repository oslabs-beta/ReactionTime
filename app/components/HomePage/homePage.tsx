import React from 'react';
import {Component} from 'react'; 

import styled from 'styled-components';
const Logo = require("./resources/logo.png");
const Background = require('./resources/0-bg/jpg');

const Wrapper = styled.div`
text-align: center;
background-image: url(${Background});
background-size: cover;
height: 100em;
`

const Image = styled.img`
    width: 30em;
    height: 30em;
`
const Title = styled.h1`
    padding: 2em;
    color: white;
    font-weight: 700;
`


class HomePage extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Welcome to ReactionTime</Title>
                <Image
                 src={Logo} alt="ReactionTime Logo"
                 >
                 </Image>
            </Wrapper>
        )
    }
}

export default HomePage; 



