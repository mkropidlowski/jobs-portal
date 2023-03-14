import JobDetails from 'components/molecules/JobDetails/JobDetails';
import { useRouter } from 'next/router';

const JobDetailsPage = () => {
	const router = useRouter();
	const { slug } = router.query;
	return <JobDetails jobId={slug} />;
};

export default JobDetailsPage;

