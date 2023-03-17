import { Loading } from 'components/icons';
import { ICard } from 'components/organisms/Offers/types';
import useSingleJobOffer from 'hooks/useSingleJobOffer';
import NavBar from '../NavBar/Navbar';
import styles from './jobDetails.module.scss';
import Image from 'next/image';
import Heading from 'components/atoms/Heading/Heading';
import { Timestamp } from 'firebase/firestore/lite';
import Button from 'components/atoms/Button/Button';

const JobDetails: React.FC<ICard> = ({ jobId }) => {
	const { error, isPending, job } = useSingleJobOffer(jobId, 'jobs');
	const timestamp = Timestamp.fromDate(new Date()).toDate();

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.messageBox}>{error && <div>{error}</div>}</div>
				{isPending ? (
					<div>
						<Loading />
					</div>
				) : (
					<div className={styles.detailsSection}>
						{job.map(
							({
								companyName,
								companyImg,
								position,
								salaryFrom,
								salaryTo,
								salaryType,
								currency,
								location,
								addedAt,
								offerDescription,
								technologies,
							}) => (
								<div key={jobId}>
									<div className={styles.heading}>
										<div className={styles.companyLogo}>
											<Image src={companyImg} alt={companyName} width={50} height={50} />
											<p className={styles.companyName}>{companyName}</p>
										</div>
										<div className={styles.positionDetails}>
											<div className={styles.positionBox}>
												<Heading variant="h3" bold>
													{position}
												</Heading>
												<Heading variant="h5">
													Salary: {salaryFrom} - {salaryTo} {currency} {salaryType}
												</Heading>
											</div>
											<div className={styles.locationBox}>
												<Heading variant="h5" bold>
													{location}
												</Heading>
												<Heading variant="h5">{timestamp.toLocaleDateString(addedAt)}</Heading>
												<div className={styles.buttons}>
													<Button color="primary">Aplikuj!</Button>
												</div>
											</div>
										</div>
									</div>
									<div className={styles.technologiesBox}>
										<Heading variant="h5" className={styles.techHeading}>
											Technologies we use:
										</Heading>
										<ul className={styles.stackList}>
											{technologies.map((tech) => (
												<li key={tech} className={styles.techLanguage}>
													{tech}
												</li>
											))}
										</ul>
									</div>
									<div className={styles.description}>
										<p className={styles.aboutCompany}>{offerDescription?.aboutCompany}</p>
										<p className={styles.descriptionHeading}>{offerDescription?.heading}</p>
										<ul className={styles.requirementsItems}>
											{offerDescription?.requirementsList.map((listItem) => (
												<li key={listItem} className={styles.item}>
													{listItem}
												</li>
											))}
										</ul>
										<p className={styles.descriptionFooter}>{offerDescription?.footer}</p>
									</div>
								</div>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default JobDetails;

