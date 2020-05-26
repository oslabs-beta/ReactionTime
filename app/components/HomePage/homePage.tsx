import React from 'react';
import {Component} from 'react'; 
// import styled from 'styled-components';

const Logo = require("./resources/logo.png");

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to ReactionTime</h1>
                    <h5>A SIMPLER WAY TO WRITE TESTS FOR REACT'S EXPERIMENTAL CONCURRENT MODE</h5>
                <br/>
                <br/>
                <img
                 src={Logo} alt="ReactionTime Logo"
                 >
                 </img>
                 <br/>
                 <br/>
                 <p>
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
                </p>
                <p>
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
                </p>
            </div>
        )
    }
}

export default HomePage; 



