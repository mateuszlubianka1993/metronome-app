import React from 'react';
import Header from './Header';
import Metronome from './Metronome';

class App extends React.Component {
    state = {
        bpm: 60,
        isPlaying: false,
    };

    onChangeInput = (e) => {
        // console.log(e.target.value);
        this.setState({bpm: e.target.value})
    };

    render() {
        return (
            <div className="ui container">
                <Header />
                <Metronome 
                    onChangeInput={this.onChangeInput}
                    bpm={this.state.bpm}
                />
            </div>
        );
    };
};

export default App;
