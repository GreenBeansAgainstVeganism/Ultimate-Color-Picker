import React, { Component } from 'react';

import './ColorBox.css';

/**
 * A UI element that displays a single color and has controls for selecting the color as well as
 * adding it to the current palette
 * @prop {Color} props.color - The color to display
 * @prop {function} props.onSelectedColorChange - The callback to execute when the change color button is pressed
 */
export default class ColorBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onSelectedColorChange(this.props.color);
    }

    render() {
        return (
            <div className="color-box" style={{backgroundColor: this.props.color.display()}}>
                <button className='select-color' onClick={this.handleChange}></button>
                {/* <button className='add-color'></button> */}
            </div>
        )
    }
}
