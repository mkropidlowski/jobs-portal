import { db } from 'config/firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import Navbar from '../NavBar/Navbar';
import styles from './addOfferForm.module.scss';

export interface IOfferForm {}

const AddOfferForm: React.FC<IOfferForm> = () => {
	const addJob = async () => {
		const docRef = await addDoc(collection(db, 'jobs'), {
			companyName: 'Amazon',
			companyImg: 'https://img.icons8.com/color/48/null/amazon.png',
			currency: 'PLN',
			addedAt: Timestamp.fromDate(new Date()),
			location: 'Warsaw, Poland',
			position: 'Senior Web Developer',
			salaryFrom: '20000',
			salaryTo: '25000',
			salaryType: 'PLN',
			technologies: ['JavaScript', 'React.js', 'Vue.js', 'AWS', 'Cloud', 'Python'],
			offerDescription: {
				aboutCompany:
					'Join Amazon Project Kuiper. Project Kuiper is an initiative to launch a constellation of Low Earth Orbit satellites that will provide low-latency, high-speed broadband connectivity to unserved and underserved communities around the world.',
				benefits: '',
				footer: 'Join Amazon Project Kuiper.',
				heading:
					'You will architect the software infrastructure for RF test automation and ATE in the payload Antennas and Customer Terminal labs. You will develop the test framework for the internal team to create, track, update, change, and execute tests. This framework enables repeatable, discoverable tests, collects critical measurements, and simplifies test verification. You will work closely with Antenna&RF Engineers, System Developers, Software Developers, Digital and FPGA/DSP designers to help support them in the automation of existing testing. You will be the lab software liaison interfacing with external teams on integrating automated testing into acceptance procedures, qualification test procedures, payload integration test.',
				requirementsList: [
					'Determine automation requirements across the internal and external teams',
					'Develop automation services to optimize measurements, data management and analysis for antenna and customer terminal verification',
					'Train internal and external teams on test automation',
				],
			},
		});
		console.log('Document written with ID: ', docRef.id);
	};

	// addJob();

	return (
		<div className={styles.wrapper}>
			<Navbar />
			<form action="" className={styles.form}>
				{/* placee for <Input TODO: JOB-16 */}
			</form>
		</div>
	);
};

export default AddOfferForm;

