import React from 'react';
import './Metronome.css';

const Metronome = (props) => {

    let buttonTxt = 'Start';
    
    if(props.isPlaying) {
        buttonTxt = 'Stop';
    } else {
        buttonTxt = 'Start';
    }

    return (
        <div className="metronome-container">
            <div className="metronome-input-box">
                <div className="bpm-display">{props.bpm} BPM</div>
                <input type="range" min="40" max="220" onChange={props.onChangeInput}/>
            </div>
                <button className="positive large ui button" onClick={props.startMetronome}>{buttonTxt}</button>
        </div>
    );
};

export default Metronome;
