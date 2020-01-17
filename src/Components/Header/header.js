import React from 'react';
import './header.css';
import logotip from '../../Assets/images/logotip.png';

const Header = () => {
    return (
            <header className="header">
                <div className="logotip">
                    <img className="logo" src={logotip} alt="logotip"/>
                </div>
            </header>
    );
};

export default Header;