import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import Card from './components/Card';
import styles from './offers.module.scss';
import { ICard } from './types';
import { Timestamp } from 'firebase/firestore/lite';
import useFetchFirestore from 'hooks/useFetchFirestore';

const Offers: React.FC<ICard> = () => {
	const { error, isPending, jobs } = useFetchFirestore('jobs');

	const timestamp = Timestamp.fromDate(new Date()).toDate();

	return (
		<div className={clsx(styles.container)}>
			<Heading className={styles.heading} variant="h1" bold id="jobs">
				Offers
			</Heading>
			<div className={styles.offersContainer}>
				{error && <div>{error}</div>}
				{isPending && <div>Loading...</div>}
				{jobs.map(
					({ id, companyName, companyImg, position, salaryFrom, salaryTo, salaryType, currency, location, addedAt }) => (
						<Card
							id={id}
							key={id}
							companyImg={companyImg}
							companyName={companyName}
							position={position}
							salaryFrom={salaryFrom}
							salaryTo={salaryTo}
							salaryType={salaryType}
							currency={currency}
							location={location}
							addedAt={timestamp.toLocaleDateString(addedAt)}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Offers;

