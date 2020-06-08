import React from 'react';

import App from './app';

const setupTest = () => render(<App />);

describe('App', () => {
    afterEach(cleanup);

    it('should renders the react logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('react logo')).toHaveAttribute('class', 'reactLogo');
    });
    it('should renders a title', () => {
        const { getByText } = setupTest();
        expect(getByText('App Boilerplate')).toHaveClass('title');
    });
    it('should renders a description', () => {
        const { getByText } = setupTest();
        const text = 'This React application boilerplate uses the following core tools:';
        expect(getByText(text)).toHaveClass('description');
    });
    it('should render the tools logos', () => {
        const { getByTestId } = setupTest();
        expect(getByTestId('logos')).toBeInTheDocument();
    });
});
