import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import Card from './components/Card';
import styles from './offers.module.scss';
import { ICard } from './types';
import { fakeData } from './data/fakeData';

const Offers: React.FC<ICard> = () => {
	return (
		<div className={clsx(styles.container)}>
			<Heading className={styles.heading} variant="h1" bold>
				Offers
			</Heading>
			<div className={styles.offersContainer}>
				{fakeData.map(
					({ companyName, companyImg, position, salaryFrom, salaryTo, salaryType, currency, location, addedAt }) => (
						<Card
							key={companyName}
							companyImg={companyImg}
							companyName={companyName}
							position={position}
							salaryFrom={salaryFrom}
							salaryTo={salaryTo}
							salaryType={salaryType}
							currency={currency}
							location={location}
							addedAt={addedAt}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Offers;

