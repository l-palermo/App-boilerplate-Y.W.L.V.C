import React from 'react';

import './app.css';
import reactLogo from './assets/react.svg';
import Logos from './components/logos';

const App = () => {
    return (
        <React.Fragment>
            <div className="reactLogoContainer">
                <img className="reactLogo" src={reactLogo} alt="react logo" />
            </div>
            <div className="text">
                <div className="title">App Boilerplate</div>
                <div className="description">
                    This React application boilerplate uses the following core tools:
                </div>
            </div>
            <Logos />
        </React.Fragment>
    );
};

export default App;
