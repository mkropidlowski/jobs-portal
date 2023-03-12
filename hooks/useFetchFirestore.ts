import { ICard } from 'components/organisms/Offers/types';
import { db } from 'config/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';

const useFetchFirestore = (collectionName: string) => {
	const [error, setError] = useState<string>('');
	const [isPending, setIsPending] = useState<boolean>(true);
	const [jobs, setJobs] = useState<ICard[]>([]);

	useEffect(() => {
		const getJobs = async () => {
			setIsPending(true);
			try {
				const usersRef = collection(db, collectionName);
				const querySnapshot = await getDocs(usersRef);
				const userList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				})) as ICard[];
				setJobs(userList);
				setIsPending(false);
			} catch (err) {
				setError('Data not found');
				setIsPending(false);
			}
		};
		getJobs();
	}, [collectionName]);
	return { error, isPending, jobs };
};

export default useFetchFirestore;

