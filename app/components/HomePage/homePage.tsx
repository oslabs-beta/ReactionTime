import React from 'react';
import {Component} from 'react'; 
// import styled from 'styled-components';

const Logo = require("./resources/logo.png");
const Background = require('./resources/0-bg/jpg');

// const Wrapper = styled.div`
// text-align: center;
// background-image: url(${Background});
// background-size: cover;
// height: 100em;
// `

// const Image = styled.img`
//     width: 30em;
//     height: 30em;
// `
// const Title = styled.h1`
//     padding: 1em;
//     color: white;
//     font-weight: 700;
//     font-style: italic;
// `

// const SubTitle = styled.h5`
//     color: white;
//     font-style: italic;
// `

// const Text = styled.p`
//     padding: 2em;
//     color: white;
//     font-weight: 500;
//     margin-left: 40em;
//     margin-right: 40em;
//     text-align: center;
// `



class HomePage extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Welcome to ReactionTime</Title>
                    <SubTitle>A SIMPLER WAY TO WRITE TESTS FOR REACT'S EXPERIMENTAL CONCURRENT MODE</SubTitle>
                <br/>
                <br/>
                <Image
                 src={Logo} alt="ReactionTime Logo"
                 >
                 </Image>
                 <br/>
                 <br/>
                 <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
                    libero eu nibh porttitor fermentum. Nullam venenatis erat id
                    vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                    Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
                    dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
                    lectus. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. In non lorem sit amet elit
                    placerat maximus. Pellentesque aliquam maximus risus, vel sed
                    vehicula.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
                    libero eu nibh porttitor fermentum. Nullam venenatis erat id
                    vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                    Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
                    dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
                    lectus. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. In non lorem sit amet elit
                    placerat maximus. Pellentesque aliquam maximus risus, vel sed
                    vehicula.
                </Text>
            </Wrapper>
        )
    }
}

export default HomePage; 



