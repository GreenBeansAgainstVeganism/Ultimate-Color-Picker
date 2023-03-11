import Color from 'colorjs.io';
import React from 'react';

import './App.css';

// import ColorBox from '../ColorBox/ColorBox';
import ColorArray from '../ColorArray/ColorArray';

/**
 * Component containing the entire app
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: new Color('hsv', [
                Math.random() * 360,
                Math.random() * 60 + 10,
                Math.random() * 30 + 70])
        };

        this.handleSelectedColorChange = this.handleSelectedColorChange.bind(this);
    }

    handleSelectedColorChange(newcolor) {
        this.setState({ selectedColor: newcolor });
    }

    render() {
        return (
            <div id="app" style={{ backgroundColor: this.state.selectedColor.display() }}>
                <header>
                    <h1>Ultimate Color Picker</h1>
                </header>
                <main>
                    <div>
                        <ColorArray rows={6} columns={12}
                            baseColor={this.state.selectedColor}
                            onSelectedColorChange={this.handleSelectedColorChange}
                            colorComputeFunction={(c,x,y) => {
                                c.hsv.h += (360 / 12) * x;
                                c.hsv.v *= 1 - (y / 6);
                            }}></ColorArray>
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
