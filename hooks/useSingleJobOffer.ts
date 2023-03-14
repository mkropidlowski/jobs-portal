import { ICard } from 'components/organisms/Offers/types';
import { db } from 'config/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';

const useSingleJobOffer = (singleId: string, collectionName: string) => {
	const [error, setError] = useState<string>('');
	const [isPending, setIsPending] = useState<boolean>(true);
	const [job, setJob] = useState<ICard[]>([]);

	useEffect(() => {
		const getJobs = async () => {
			setIsPending(true);
			try {
				const jobRef = doc(db, collectionName, singleId);
				const docSnap = await getDoc(jobRef);
				if (docSnap.exists()) {
					const jobData = docSnap.data() as ICard;
					setJob([jobData]);
					setIsPending(false);
				} else {
					setError('Data not found');
					setIsPending(false);
				}
			} catch (err) {
				setError(err.message);
			}
		};
		getJobs();
	}, [collectionName, singleId]);
	return { error, isPending, job };
};

export default useSingleJobOffer;

