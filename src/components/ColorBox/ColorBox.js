import React, { Component } from 'react';

import './ColorBox.css';

export default class ColorBox extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <div className="color-box" style={{backgroundColor: this.props.color.display()}}></div>
        )
    }
}
