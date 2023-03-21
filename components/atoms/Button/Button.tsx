import { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';
import capitalize from 'lodash/capitalize';

export interface IButtonProps {
	type?: 'button' | 'submit' | 'reset';
	color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
	sizeVariant?: 'large' | 'medium' | 'small';
	variant?: 'default';
	// eslint-disable-next-line no-undef
	icon?: JSX.Element;
}

const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = ({
	type = 'button',
	color = 'primary',
	sizeVariant,
	children,
	className,
	icon = null,
	...rest
}) => {
	return (
		<button
			className={clsx(
				styles.button,
				styles[`button${capitalize(color)}`],
				styles[`button${capitalize(sizeVariant)}`],
				className
			)}
			type={type}
			{...rest}
		>
			<span className={clsx(styles.buttonChildren)}>
				{icon}
				{children}
			</span>
		</button>
	);
};

export default Button;

