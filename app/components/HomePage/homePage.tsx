import React from 'react';
import { Component } from 'react';
import './homePage.css';

import logo from "./resources/logo_transparent_blue.png";


class HomePage extends Component {
    render() {
        return (
            <div style={{paddingLeft: '20px', color: '#ebebeb', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <h1 className='heading' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 'bold', color: '#ebebeb', textAlign: 'center', padding: '1rem' , letterSpacing: '1px'}}>Welcome to ReactionTime</h1>
                    <h3 className='subtitle' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', fontStyle: 'italic', textAlign: 'center' }}>A Simpler Way to Write Tests for React's Experimental Concurrent Mode</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <img style={{ display: 'block', marginLeft: "auto", marginRight: 'auto', width: '250px', height: '250px' }}
                        src={logo} alt="ReactionTime Logo"
                    >
                    </img>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        Version 1.0
                    </p>
                    <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        ReactionTime is an open source project associated with OSLabs.
                    </p>
                    <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
                        To learn more, please checkout our <a target="_blank" href="https://github.com/oslabs-beta/ReactionTime" style={{textDecoration:'none', color:'#ebebeb'}}>GitHub</a>.
                    </p>
                </div>
            </div>
        )
    }
}

// class HomePage extends Component {
//     render() {
//         return (
//             <div style={{ paddingLeft: '20px', color: '#ebebeb' }}>
//                 <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
//                     <h1 className='heading' style={{ fontFamily: "Raleway, sans-serif", fontWeight: 'bold', color: '#ebebeb', textAlign: 'center', padding: '1rem', letterSpacing: '1px' }}>Welcome to ReactionTime</h1>
//                     <h4 className='subtitle' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', fontStyle: 'italic', textAlign: 'center' }}>A SIMPLER WAY TO WRITE TESTS FOR REACT'S EXPERIMENTAL CONCURRENT MODE</h4>
//                     <br />
//                     <br />
//                     <img style={{ display: 'block', marginLeft: "auto", marginRight: 'auto', width: '250px', height: '250px' }}
//                         src={logo} alt="ReactionTime Logo"
//                     >
//                     </img>
//                     <br />
//                     <br />
//                     <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
//                         Version 1.0
//                     </p>
//                     <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
//                         ReactionTime is an open source project associated with OSLabs.
//                     </p>
//                     <p className='text' style={{ fontFamily: "Raleway, sans-serif", color: '#ebebeb', textAlign: 'center', marginLeft: "auto", marginRight: 'auto' }}>
//                         To learn more, please checkout our <a target="_blank" href="https://github.com/oslabs-beta/ReactionTime" style={{ textDecoration: 'none', color: '#ebebeb' }}>GitHub</a>.
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }

export default HomePage;



