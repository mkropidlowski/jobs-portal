import { Loading } from 'components/icons';
import useSingleJobOffer from 'hooks/useSingleJobOffer';

const JobDetails = ({ jobId }) => {
	const { error, isPending, job } = useSingleJobOffer(jobId, 'jobs');

	return (
		<>
			{error && <div>{error}</div>}
			{isPending && (
				<div>
					<Loading />
				</div>
			)}
			{job.map((details) => (
				<div key={jobId}>
					<p>{details.companyName}</p>
					<p>{details.location}</p>
					<p>{details.position}</p>
				</div>
			))}
		</>
	);
};

export default JobDetails;

