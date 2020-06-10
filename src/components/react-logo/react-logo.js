import React from 'react';

import reactLogoImage from '../../assets/react.png';
import { reactLogoContainer, reactLogo } from './style-class';

const ReactLogo = () => {
    return (
        <div className={reactLogoContainer}>
            <img className={reactLogo} src={reactLogoImage} alt="react logo" />
        </div>
    );
};

export default ReactLogo;
