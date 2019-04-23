import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="header-container">
            <div className="header-row">
                <div className="header-icon">
                    <i className="fas fa-guitar color-text"></i>
                </div>
                <div className="header-text">
                    <h1><span className="color-text">M</span>etronome <span className="color-text">A</span>pp</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
