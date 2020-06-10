import React from 'react';
import { css } from 'linaria';

import reactLogoImage from '../../assets/react.svg';

const reactLogo = css`
    width: 30rem;
    height: 30rem;
`;

const reactLogoContainer = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReactLogo = () => {
    return (
        <div className={reactLogoContainer}>
            <img className={reactLogo} src={reactLogoImage} alt="react logo" />
        </div>
    );
};

export default ReactLogo;
