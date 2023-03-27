import Heading from './Heading';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test Heading component render', () => {
	it('Test if element renders correctly ', () => {
		const heading = render(<Heading variant="h1" />);
		expect(heading).toBeDefined();
	});
});

describe('Test Heading return html elements', () => {
	it('Test if heading have proper font size', () => {
		render(<Heading variant="h1">TEST</Heading>);
		expect(screen.getByText('TEST')).toContainHTML('<h1 class="h1">TEST</h1>');
	});
	it('Test if heading have proper font size', () => {
		render(<Heading variant="h2">TEST</Heading>);
		expect(screen.getByText('TEST')).toContainHTML('<h2 class="h2">TEST</h2>');
	});
	it('Test if heading have proper font size', () => {
		render(<Heading variant="h3">TEST</Heading>);
		expect(screen.getByText('TEST')).toContainHTML('<h3 class="h3">TEST</h3>');
	});
	it('Test if heading have proper font size', () => {
		render(<Heading variant="h4">TEST</Heading>);
		expect(screen.getByText('TEST')).toContainHTML('<h4 class="h4">TEST</h4>');
	});
});

