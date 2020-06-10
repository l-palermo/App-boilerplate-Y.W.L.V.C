import React from 'react';

import ToolLogos from './tool-logos';

const setupTest = () => render(<ToolLogos />);

describe('Logos', () => {
    afterEach(cleanup);
    it('sould render the logos', () => {
        const { getAllByRole } = setupTest();
        expect(getAllByRole('img')).toHaveLength(7);
    });
    it('sould render the yarn logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('yarn logo')).toBeInTheDocument();
    });
    it('sould render the webpack logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('webpack logo')).toBeInTheDocument();
    });
    it('sould render the testing library logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('testing library logo')).toBeInTheDocument();
    });
    it('sould render the jest logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('jest logo')).toBeInTheDocument();
    });
    it('sould render the eslint logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('eslint logo')).toBeInTheDocument();
    });
    it('sould render the stylelint logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('stylelint logo')).toBeInTheDocument();
    });
});
