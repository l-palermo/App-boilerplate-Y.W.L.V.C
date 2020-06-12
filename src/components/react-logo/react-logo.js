import React from 'react';

import reactLogoImage from '../../assets/react.png';
import { reactLogoContainer, Logo } from './style-class';

const ReactLogo = () => {
    return (
        <div className={reactLogoContainer}>
            <Logo src={reactLogoImage} speed={7} alt="react logo" />
        </div>
    );
};

export default ReactLogo;
