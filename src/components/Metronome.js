import React from 'react';
import './Metronome.css';

const Metronome = (props) => {
    return (
        <div className="metronome-container">
            <div className="metronome-input-box">
                <div className="bpm-display">{props.bpm}BPM</div>
                <input type="range" min="40" max="220" onChange={props.onChangeInput}/>
            </div>
                <button className="positive ui button">Start</button>
        </div>
    );
};

export default Metronome;
