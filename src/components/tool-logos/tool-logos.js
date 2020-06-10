import React from 'react';

import logos from '../../assets/assets';
import { LogoContainer, ImageSmall, ImageLarge } from './styled-components';

const ToolLogos = () => {
    return (
        <LogoContainer data-testid="logos">
            <ImageLarge src={logos.yarn} alt="yarn logo" />
            <ImageLarge src={logos.webpack} alt="webpack logo" />
            <ImageSmall src={logos.babel} alt="babel logo" />
            <ImageSmall src={logos.testingLibrary} alt="testing library logo" />
            <ImageSmall src={logos.jest} alt="jest logo" />
            <ImageSmall src={logos.eslint} alt="eslint logo" />
            <ImageSmall src={logos.stylelint} alt="stylelint logo" />
            <ImageSmall src={logos.linaria} alt="linaria logo" />
        </LogoContainer>
    );
};

export default ToolLogos;
