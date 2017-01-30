import React, { Component, PropTypes } from 'react';

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidUpdate(prevProps, prevState) {
        (prevProps.isBlack != this.props.isBlack) &&
        this.changeBlack();
    }

    changeBlack() {
        const { isBlack } = this.props;
        this.setState({
            name: (isBlack ? 'action' : '')
        });
    }

    componentDidMount() {
        this.changeBlack();
    }

    renderStart() {
        const { rowNum ,isBlack} = this.props;
        if (rowNum == 4 && isBlack) {
            return ( <span className = "start"> 开始 </span>);
            };
        }

        render() {
            const { name } = this.state;
            return ( < li className = { name } > { this.renderStart() } <
                /li>
            );
        }
    }

    export default Block;