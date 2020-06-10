import React from 'react';

import Logos from './components/tool-logos';
import ReactLogo from './components/react-logo';
import { Title, Description } from './styled-components';

const App = () => {
    return (
        <React.Fragment>
            <ReactLogo />
            <Title>React App Boilerplate</Title>
            <Description>This application uses the following tools:</Description>
            <Logos />
        </React.Fragment>
    );
};

export default App;
