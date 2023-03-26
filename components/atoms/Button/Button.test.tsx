import React from 'react';
import Button from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const onClick = jest.fn();

describe('Test Button component', () => {
	it('Test if element renders correctly ', () => {
		const button = render(<Button />);
		expect(button).toBeDefined();
	});
	it('Test if button is clickable', () => {
		render(<Button onClick={onClick} />);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

