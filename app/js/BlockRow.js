import React, { Component, PropTypes } from 'react';

import Block from 'js/Block';

class BlockRow extends Component {
    constructor(props) {
        super(props);
        let blockRow = [{}, {}, {}, {}];
        this.state = {
            blockRow: blockRow
        };
        const { rowNum } = this.props;

    }

    init() {
        const { blockRow } = this.state;
        blockRow.forEach((item) => {
            item.isBlack = false;
        });

        this.randomBlock(blockRow);
    }

    randomBlock(blockRow) {
        var x = Math.floor(Math.random() * 4);
        blockRow[x].isBlack = true;
        this.setState({
            blockRow: blockRow
        });

    }

    /*checkBlock(blockRow) {
        blockRow.forEach((item) => {
            item.isBlack &&
        })
    }*/
    componentDidMount() {
        this.init();
    }


    render() {
        let blocks = [];
        const { rowNum } = this.props;
        this.state.blockRow.forEach((item, index) => {
                const { isBlack } = item;
                blocks.push( < Block key = { rowNum + index }
                    isBlack = { isBlack }
                    rowNum = { rowNum }
                    />)
                });
            return ( <
                ul className = 'row' > { blocks } <
                /ul>
            );
        }
    }

    export default BlockRow;