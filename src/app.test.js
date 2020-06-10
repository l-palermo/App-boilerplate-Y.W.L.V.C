import React from 'react';

import App from './app';

const setupTest = () => render(<App />);

describe('App', () => {
    afterEach(cleanup);

    it('should renders the react logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('react logo')).toBeInTheDocument();
    });
    it('should renders a title', () => {
        const { getByText } = setupTest();
        expect(getByText('React App Boilerplate')).toHaveClass('title');
    });
    it('should renders a description', () => {
        const { getByText } = setupTest();
        const text = 'This application uses the following tools:';
        expect(getByText(text)).toHaveClass('description');
    });
    it('should render the tools logos', () => {
        const { getByTestId } = setupTest();
        expect(getByTestId('logos')).toBeInTheDocument();
    });
});
