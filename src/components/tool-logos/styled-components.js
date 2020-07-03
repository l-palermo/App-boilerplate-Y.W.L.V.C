import { styled } from 'linaria/react';

export const LogoContainer = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: space-evenly;
    align-items: center;
    margin: 0 10rem;
`;

export const Image = styled.img`
    justify-self: center;
    width: ${({ alt }) => (alt === 'yarn logo' ? `9rem` : `auto`)};
    height: ${({ alt, size }) => {
        if (size) return `${size}rem`;
        return alt === 'yarn logo' ? `4rem` : `5rem`;
    }};
    margin: 1rem;
`;
