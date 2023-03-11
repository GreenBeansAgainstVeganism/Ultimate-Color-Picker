import Color from 'colorjs.io';
import React from 'react';

import './App.css';

import ColorBox from '../ColorBox/ColorBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: new Color('hsv', [
                Math.random() * 360,
                Math.random() * 60 + 10,
                Math.random() * 30 + 70])
        };
    }

    render() {
        return (
            <div id="app" style={{ backgroundColor: this.state.selectedColor.display() }}>
                <header>
                    <h1>Ultimate Color Picker</h1>
                </header>
                <main>
                    <div>
                        <ColorBox color={this.state.selectedColor}></ColorBox>
                        <ColorBox color={new Color('red')}></ColorBox>
                        <ColorBox color={new Color('hsv', [
                            Math.random() * 360,
                            Math.random() * 60 + 10,
                            Math.random() * 30 + 70])
                        }></ColorBox>
                    </div>
                </main>
                <footer>
                    <p>
                        &copy; Sage Cook {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
