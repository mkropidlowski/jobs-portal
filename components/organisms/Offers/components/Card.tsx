import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styles from './card.module.scss';
import { ICard } from '../types';

const Card: React.FC<ICard> = ({
	companyImg,
	companyName,
	position,
	salaryFrom,
	salaryTo,
	salaryType,
	currency,
	location,
	addedAt,
	className,
	...rest
}) => {
	return (
		<div className={clsx(styles.container, className)} {...rest}>
			<div className={styles.companyDetails}>
				{companyImg}
				<p className={styles.companyName}>{companyName}</p>
			</div>
			<div className={styles.positionDetails}>
				<Heading variant="h3" bold>
					{position}
				</Heading>
				<Heading variant="h5">
					Salary: {salaryFrom} - {salaryTo} {currency} {salaryType}
				</Heading>
				<Heading variant="h5" bold>
					{location}
				</Heading>
			</div>
			<div className={styles.specificDetails}>
				<p className={styles.addedAt}>Added: {addedAt}</p>
				<div className={styles.buttons}>
					<Button color="secondary">Aplikuj!</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;

