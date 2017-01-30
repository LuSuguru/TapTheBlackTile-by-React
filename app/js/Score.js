import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreNum: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {isAdd} = this.props;
        let {scoreNum} = this.state;
        scoreNum = (isAdd ? this.scoreNum + 1 : 0);
        this.setState({
            scoreNum: scoreNum
        })
    }

    render() {
        return (
            <h1 className="score">{this.state.scoreNum}</h1>
        );
    }
}

export default Score;