import JobDetails from 'components/molecules/JobDetails/JobDetails';
import { ICard } from 'components/organisms/Offers/types';
import { useRouter } from 'next/router';

export const JobDetailsPage = () => {
	const router = useRouter();
	const { slug } = router.query as ICard;

	return <JobDetails jobId={slug} />;
};

