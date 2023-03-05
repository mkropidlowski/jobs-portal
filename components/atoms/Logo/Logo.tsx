import clsx from 'clsx';
import Heading from '../Heading/Heading';
import styles from './logo.module.scss';

export interface ILogo {
	className?: string;
}

const Logo: React.FC<ILogo> = ({ className, ...rest }) => (
	<div className={clsx(styles.container, className)} {...rest}>
		<Heading className={styles.logo} variant="h3" bold>
			JobsPortal
		</Heading>
		<span className={styles.slogan}>Find your dream job</span>
	</div>
);

export default Logo;

