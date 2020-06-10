import React from 'react';

import ReactLogo from '.';

const setupTest = () => render(<ReactLogo />);

describe('React logo', () => {
    afterEach(cleanup);
    it('should render the react logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('react logo')).toBeInTheDocument();
    });
});
