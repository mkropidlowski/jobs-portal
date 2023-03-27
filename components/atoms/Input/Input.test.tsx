import Input from './Input';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test Input component render', () => {
	it('Test if element renders correctly ', () => {
		const container = render(<Input data-testid={'test'} type="text" placeholder="placeholder" />);
		expect(container).toBeDefined();
		const input = screen.getByTestId('test');
		expect(input).toHaveAttribute('placeholder', 'placeholder');
		expect(input).toHaveAttribute('type', 'text');
	});
});

