import React, { Component } from 'react';

import Score from 'js/Score';
import BlockRow from 'js/BlockRow';
import Keys from 'js/Keys';

class GameBackground extends Component {
    constructor(props) {
        super(props);
        this.ceshi = false;         ////////////
        let blockRows = [];
        for (let i = 0; i < 5; i++) {
            blockRows.push({
                init: false,
                index: i
            })
        };
        this.state = {
            blockRows: blockRows,
            isAdd: false,
            top: 0
        };
    }

    init(isMove) {
        //isState = false;
        let { isAdd, blockRows } = this.state;
        this.canMove = true;
        this.v = 0.15;
        this.t = 149 / 0.15;
        isMove && this.stopMove();
        isAdd = false;
        blockRows.forEach((item) => {
            item.init = init;
        })
    }

    startMove() {
      
    }

    componentDidMount() {
        console.log(this.ceshi);
        if (this.ceshi == false) {
            this.startMove();
        }
    }
    


    render() {
        let blockRowArr = [];
        this.state.blockRows.forEach((item) => {
            const { init, index } = item;
            blockRowArr.push( < BlockRow init = { init }
                rowNum = { index } key = {index}/>);
        });

        let top = {
            top:this.state.top
        }
        return ( 
            <main>
                <Score add = { this.state.isAdd }/>  
                <div className = 'background' style = { top }> { blockRowArr } </div>
                <Keys/>
             </main>
        );
    }
}

export default GameBackground;
