import React, { Component } from 'react';

class GameHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            header >
            <
            h1 > 别踩白块儿 < /h1> <
            nav >
            <
            a href = "#"
            className = "reStart_1" > 重新开始 < /a>     < /
            nav > <
            /header>
        );
    }
}

export default GameHeader;