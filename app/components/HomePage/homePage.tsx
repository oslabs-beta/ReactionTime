import React from 'react';
import { Component } from 'react';
import './homePage.css';

import logo from "./resources/logo.png";


class HomePage extends Component {
    render() {
        return (
            <div style={{paddingLeft: '20px'}}>
                <div style={{ backgroundColor: '#41b3d3', paddingLeft: '100px', paddingRight: '100px' }}>
                    <h1 className='heading' style={{ fontFamily: "Heebo, sans-serif", fontWeight: 'bold', color: 'white', textAlign: 'center', padding: '1rem' }}>Welcome to ReactionTime</h1>
                    <h4 className='subtitle' style={{ fontFamily: "Heebo, sans-serif", color: 'white', fontStyle: 'italic', textAlign: 'center' }}>A SIMPLER WAY TO WRITE TESTS FOR REACT'S EXPERIMENTAL CONCURRENT MODE</h4>
                    <br />
                    <br />
                    <img style={{ display: 'block', marginLeft: "auto", marginRight: 'auto', width: '225px', height: '225px' }}
                        src={logo} alt="ReactionTime Logo"
                    >
                    </img>
                    <br />
                    <br />
                    <p className='text' style={{ fontFamily: "Heebo, sans-serif", color: 'white', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        Version 1.0
                    </p>
                    <p className='text' style={{ fontFamily: "Heebo, sans-serif", color: 'white', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        ReactionTime is an open source project associated with OSLabs.
                    </p>
                    <p className='text' style={{ fontFamily: "Heebo, sans-serif", color: 'white', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        To learn more, please checkout our <a href="https://github.com/oslabs-beta/ReactionTime">GitHub</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default HomePage;



