import React from 'react';

import './app.css';
import Logos from './components/tool-logos';
import ReactLogo from './components/react-logo';

const App = () => {
    return (
        <React.Fragment>
            <ReactLogo />
            <div className="text">
                <div className="title">React App Boilerplate</div>
                <div className="description">This application uses the following tools:</div>
            </div>
            <Logos />
        </React.Fragment>
    );
};

export default App;
