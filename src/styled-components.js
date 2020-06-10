import { styled } from 'linaria/react';

import { mqMedium } from './constants.js';

export const Title = styled.div`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2.5rem;

    @media (${mqMedium}) {
        font-size: 3rem;
    }
`;

export const Description = styled.div`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2.5rem;

    @media (${mqMedium}) {
        font-size: 2rem;
    }
`;
