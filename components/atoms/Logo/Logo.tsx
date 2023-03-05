import clsx from 'clsx';
import Heading from '../Heading/Heading';
import styles from './logo.module.scss';

export interface ILogo {
	className?: string;
}

const Logo: React.FC<ILogo> = ({ className, ...rest }) => (
	<div className={clsx(styles.container, className)} {...rest}>
		<Heading variant="h3" bold>
			JobsPortal
		</Heading>
	</div>
);

export default Logo;

