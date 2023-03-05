import clsx from 'clsx';
import styles from './logo.module.scss';

export interface ILogo {
	className: string;
}

const Logo: React.FC<ILogo> = ({ className, ...rest }) => (
	<div className={clsx(styles.container, className)} {...rest}>
		This is logo
	</div>
);

export default Logo;

