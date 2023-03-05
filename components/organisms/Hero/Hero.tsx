import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { JobHunt } from 'components/icons';
import styles from './hero.module.scss';

export interface IHero {
	className?: string;
}

const Hero: React.FC<IHero> = ({ className }) => {
	return (
		<div className={clsx(styles.container, className)}>
			<div className={styles.content}>
				<Heading className={styles.heading} variant="h1" bold>
					Find the perfect job for you!
				</Heading>
				<div className={styles.buttons}>
					<Button type="button" color="primary">
						Find a job
					</Button>
					<Button type="button" color="tertiary">
						Add new offer
					</Button>
				</div>
			</div>
			<div className={styles.image}>
				<JobHunt width={'350px'} height={'350px'} />
			</div>
		</div>
	);
};

export default Hero;

