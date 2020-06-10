import { css } from 'linaria';

import { mqMedium } from '../../constants.js';

export const reactLogo = css`
    height: 12rem;
    margin: 3rem;

    @media (${mqMedium}) {
        height: 16rem;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
    animation: rotate 3s linear infinite;
`;

export const reactLogoContainer = css`
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
