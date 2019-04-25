import React from 'react';
import Header from './Header';
import Metronome from './Metronome';
import click2 from '../sounds/click2.wav';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bpm: 40,
            isPlaying: false,
        };

        this.click2 = new Audio(click2);
    }
    
    onChangeInput = (e) => {
        // console.log(e.target.value);
        if (this.state.isPlaying) {
            clearInterval(this.metronome);
            this.metronome = setInterval(this.play, (60 / this.state.bpm) * 1000);

            this.setState({
              bpm: e.target.value
            });
          } else {
            this.setState({ bpm: e.target.value });
          }
    };
    
    play = () => {
        this.click2.play()
    };

    startMetronome = () => {
        if(this.state.isPlaying) {
            clearInterval(this.metronome);
            this.setState({
                isPlaying: false
            });
        } else {
            this.metronome = setInterval(
                this.play,
                (60 / this.state.bpm) * 1000
              );
              this.setState(
                {
                  isPlaying: true
                },
                this.play
              );
        }
    };

    render() {
        return (
            <div className="ui container">
                <Header />
                <Metronome 
                    onChangeInput={this.onChangeInput}
                    bpm={this.state.bpm}
                    startMetronome={this.startMetronome}
                    isPlaying={this.state.isPlaying}
                />
            </div>
        );
    };
};

export default App;
