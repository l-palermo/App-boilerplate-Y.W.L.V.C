import React from 'react';
import { styled } from 'linaria/react';

import yarn from '../../assets/yarn.svg';
import webpack from '../../assets/webpack.svg';
import testingLibrary from '../../assets/testing-library.png';
import jest from '../../assets/jest.svg';
import eslint from '../../assets/eslint.svg';
import stylelint from '../../assets/stylelint.svg';
import linaria from '../../assets/linaria.png';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageLarge = styled.img`
    height: 9rem;
    width: ${(props) => (props.src === yarn ? `9rem` : `auto`)};
`;

const ImageSmall = styled.img`
    width: auto;
    height: 5rem;
`;

const ToolLogos = () => {
    return (
        <LogoContainer data-testid="logos">
            <ImageLarge src={yarn} alt="yarn logo" />
            <ImageLarge src={webpack} alt="webpack logo" />
            <ImageSmall src={testingLibrary} alt="testing library logo" />
            <ImageSmall src={jest} alt="jest logo" />
            <ImageSmall src={eslint} alt="eslint logo" />
            <ImageSmall src={stylelint} alt="stylelint logo" />
            <ImageSmall src={linaria} alt="linaria logo" />
        </LogoContainer>
    );
};

export default ToolLogos;
