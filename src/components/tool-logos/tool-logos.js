import React from 'react';
import PropTypes from 'prop-types';

import { LogoContainer, Image } from './styled-components';

const ToolLogos = ({ logos }) => {
    return (
        <LogoContainer data-testid="logos-container">
            {logos.map(({ src, alt, size }) => {
                return <Image key={alt} src={src} alt={alt} size={size} />;
            })}
        </LogoContainer>
    );
};

ToolLogos.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired })
            .isRequired
    ).isRequired,
};

export default ToolLogos;
