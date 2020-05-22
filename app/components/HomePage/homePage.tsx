import React from 'react';
import {Component} from 'react'; 


import Logo from "./logo.png";

class HomePage extends Component {
    render() {
        return (
            <div>
                    <h1>Welcome to ReactionTime</h1>
                    <img src={Logo} alt="ReactionTime Logo"/>
            </div>
        )
    }
}

export default HomePage; 



