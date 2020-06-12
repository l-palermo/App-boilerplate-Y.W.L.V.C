import { styled } from 'linaria/react';

export const LogoContainer = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: space-evenly;
    align-items: center;
    margin: 0 10rem;
`;

export const ImageLarge = styled.img`
    justify-self: center;
    height: ${({ alt }) => (alt === 'yarn logo' ? `4rem` : `6rem`)};
    width: ${({ alt }) => (alt === 'yarn logo' ? `9rem` : `auto`)};
`;

export const ImageSmall = styled.img`
    justify-self: center;
    width: auto;
    height: ${({ size }) => (size ? `${size}rem` : `5rem`)};
    margin: 1rem;
`;
