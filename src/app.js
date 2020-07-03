import React from 'react';

import Logos from './components/tool-logos';
import ReactLogo from './components/react-logo';
import Header from './components/header';
import logos from './assets/assets';

const App = () => {
    return (
        <React.Fragment>
            <ReactLogo />
            <Header
                title="React App Boilerplate"
                subTitle="This application uses the following tools:"
            />
            <Logos logos={logos} />
        </React.Fragment>
    );
};

export default App;
