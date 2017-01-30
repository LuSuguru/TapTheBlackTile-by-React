require('css/game');

import React, { Component } from 'react';
import {render} from 'react-dom';

import GameHeader from 'js/GameHeader';
import GameBackground from 'js/GameBackground';

class GameMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GameHeader></GameHeader>
                <GameBackground></GameBackground>
            </div>
        );
    }
}


render(<GameMain/>, document.getElementById('root'));