import React, { Component } from "react";
import './style.scss';
import LeftIcon from './leftIcon/index';
import Toolbar from './Toolbar/index';

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        console.log(this.state)
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const { isOpen } = this.state;
        return (
            <>
                <Toolbar opened={isOpen} />
                <LeftIcon toggle={this.toggle} />
            </>
        )
    }
}