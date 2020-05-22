import React from 'react';
import {Component} from 'react'; 

const reactionTimeLogo = require(".././resources/icons/512x512.png");

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to ReactionTime</h1>
                <img src={reactionTimeLogo} alt="ReactionTime Logo"/>
            </div>
        )
    }
}

export default HomePage; 



