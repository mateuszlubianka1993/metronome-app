import React from 'react';
import './Metronome.css';

const Metronome = () => {
    return (
        <div className="metronome-container">
            <div className="metronome-input-box">
                <div className="bpm-display">BPM</div>
                <input type="range" min="40" max="220" />
            </div>
                <button className="positive ui button">Start</button>
        </div>
    );
};

export default Metronome;
