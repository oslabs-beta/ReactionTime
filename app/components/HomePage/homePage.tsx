import React from 'react';
import {Component} from 'react'; 
import './homePage.css';

import logo from "./resources/logo.png";



class HomePage extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#51EAEA', paddingLeft: '100px', paddingRight: '100px'}}>
                <h1 className='heading' style={{textAlign: 'center', padding: '1rem'}}>Welcome to ReactionTime</h1>
                    <h5 className='subtitle' style={{textAlign: 'center'}}>A SIMPLER WAY TO WRITE TESTS FOR REACT'S EXPERIMENTAL CONCURRENT MODE</h5>
                <br/>
                <br/>
                <img style={{display: 'block', marginLeft: "auto", marginRight: 'auto', width: '225px', height: '225px'}}
                 src={logo} alt="ReactionTime Logo"
                 >
                 </img>
                 <br/>
                 <br/>
                 <p className='text' style={{textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
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
                <p className='text' style={{textAlign: 'center', marginLeft: "auto", marginRight: 'auto'}}> 
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



