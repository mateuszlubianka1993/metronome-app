import React from 'react';

const Metronome = () => {
    return (
        <div className="metronome-container">
            <div className="bpm-slider">
                <div>BPM</div>
                <input type="range" min="40" max="220" />
            </div>
                <button>Start</button>
        </div>
    );
};

export default Metronome;
