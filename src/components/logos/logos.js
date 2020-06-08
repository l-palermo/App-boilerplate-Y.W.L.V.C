import React from 'react';

import './logos.css';
import yarn from '../../assets/yarn.svg';
import webpack from '../../assets/webpack.svg';
import testingLibrary from '../../assets/testing-library.png';
import jest from '../../assets/jest.svg';
import eslint from '../../assets/eslint.svg';
import stylelint from '../../assets/stylelint.svg';

const Logos = () => {
    return (
        <div data-testid="logos" className="logosContainer">
            <img className="yarnLogo" src={yarn} alt="yarn logo" />
            <img className="webpackLogo" src={webpack} alt="webpack logo" />
            <img className="testingLibraryLogo" src={testingLibrary} alt="testing library logo" />
            <img className="jestLogo" src={jest} alt="jest logo" />
            <img className="eslintLogo" src={eslint} alt="eslint logo" />
            <img className="stylelintLogo" src={stylelint} alt="stylelint logo" />
        </div>
    );
};

export default Logos;
