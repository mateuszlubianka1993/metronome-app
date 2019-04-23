import React from 'react';
import Header from './Header';
import Metronome from './Metronome';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Header />
                <Metronome />
            </div>
        );
    };
};

export default App;
