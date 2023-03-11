import React from 'react';
import Color from 'colorjs.io';

import ColorBox from '../ColorBox/ColorBox';

import './ColorArray.css';

/**
 * A collection of ColorBox components all arranged around a given base color
 * @param {int} props.rows - how many rows
 * @param {int} props.columns - how many columns
 * @param {Color} props.baseColor - The color to base the array off of
 * @param {function} props.onSelectedColorChange - The callback to execute when a ColorBox change color button is pressed
 * @param {function} props.colorComputeFunction - The function used to populate each color in the array
 * @returns {Component} - A ColorArray component
 */
export default function ColorArray(props) {
    return (
        <table className="color-array">
            <tbody>
                {new Array(props.rows).fill(0).map((junk, y) => {
                    return (<tr key={y}>
                        {new Array(props.columns).fill(0).map((junk, x) => {
                            let c = new Color(props.baseColor);
                            props.colorComputeFunction(c,x,y);
                            return (<td key={x}><ColorBox color={c} onSelectedColorChange={props.onSelectedColorChange}></ColorBox></td>)
                        })}
                    </tr>)
                })}
            </tbody>
        </table>
    )
}
