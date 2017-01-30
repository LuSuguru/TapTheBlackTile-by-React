import React, { Component } from 'react';

class Keys extends Component {
    constructor(props) {
        super(props);
    }

    changeLis(blockRow) {
        this.blockRow = blockRow;
    }

    isBlack(x) {

    }

    render () {
        return (
            <ul className = 'keys'>
                <li>Q</li>
                <li>W</li>
                <li>E</li>
                <li>R</li>
            </ul>
        )
    }
}

export default Keys;