import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input, { IInputTypeProps } from 'components/atoms/Input/Input';
import { ICard } from 'components/organisms/Offers/types';
import { db } from 'config/firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { FC, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import styles from './addOfferForm.module.scss';
import { addOfferInputs } from './data';
import { useForm } from 'react-hook-form';

const AddOfferForm: FC = () => {
	const [userValue, setUserValue] = useState<string>('');
	const [techArray, setTechArray] = useState<string[]>([]);
	const [requirements, setRequirements] = useState<string[]>([]);

	const handleInputChange = (event) => {
		setUserValue(event.target.value);
	};

	const handlerAddTechnologies = () => {
		if (userValue.trim() !== '') {
			setTechArray([...techArray, userValue]);
		}
	};
	const handlerAddRequirements = () => {
		if (userValue.trim() !== '') {
			setRequirements([...requirements, userValue]);
		}
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<ICard>({
		mode: 'all',
	});

	const submitForm = async () => {
		const formData = getValues();
		try {
			await addDoc(collection(db, 'jobs'), {
				companyName: formData.companyName,
				companyImg: 'https://img.icons8.com/color/48/null/amazon.png',
				currency: formData.currency,
				addedAt: Timestamp.fromDate(new Date()),
				location: formData.location,
				position: formData.position,
				salaryFrom: formData.salaryFrom,
				salaryTo: formData.salaryTo,
				salaryType: formData.salaryType,
				technologies: techArray,
				offerDescription: {
					aboutCompany: formData.offerDescription.aboutCompany,
					footer: formData.offerDescription.footer,
					heading: formData.offerDescription.heading,
					requirementsList: requirements,
				},
			});
		} catch {
			console.log('error');
		}
	};

	return (
		<div className={styles.wrapper}>
			<Navbar />
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(submitForm)();
				}}
			>
				<Heading variant="h4" className={styles.heading}>
					1. Type here basic information about your company
				</Heading>

				<div className={styles.basicInformation}>
					{addOfferInputs.map(({ formKey, label, inputType }) => {
						const formInputKey = formKey as keyof ICard;
						const formInputType = inputType as IInputTypeProps;
						return (
							<Input
								key={formKey}
								type={formInputType}
								{...register(formInputKey)}
								// error={!!errors[formInputKey]?.message}
								// errorText={errors[formInputKey]?.message}
								placeholder={label}
								required
							/>
						);
					})}
				</div>
				<Heading variant="h4" className={styles.heading}>
					2. Type here all information about min/max salary, currency and payment
				</Heading>

				<div className={styles.salaryInformation}>
					<Input type="number" placeholder="Min salary" {...register('salaryFrom')} required shouldRenderLabel={false} />
					<span className={styles.minusChar}>-</span>
					<Input type="number" placeholder="Max salary" {...register('salaryTo')} required shouldRenderLabel={false} />
					<Input
						type="text"
						list="currencyVariant"
						placeholder="Currency"
						{...register('currency')}
						required
						shouldRenderLabel={false}
					/>
					<datalist id="currencyVariant">
						<option value="PLN">PLN</option>
						<option value="EURO">EURO</option>
						<option value="DOLAR">DOLAR</option>
					</datalist>
					<Input
						type="text"
						list="salaryVariant"
						placeholder="Payment"
						{...register('salaryType')}
						required
						shouldRenderLabel={false}
					/>
					<datalist id="salaryVariant">
						<option value="NET">NET</option>
						<option value="GROSS">GROSS</option>
					</datalist>
				</div>
				<Heading variant="h4" className={styles.heading}>
					3. Type all information about technologies, describe your company and what are you looking for.
				</Heading>

				<div className={styles.description}>
					<div className={styles.technologiesBox}>
						<div className={styles.inputs}>
							<Input type="text" placeholder="Type technologies" required value={userValue} onChange={handleInputChange} />
							<Button type="button" color="primary" sizeVariant="small" onClick={handlerAddTechnologies}>
								Add
							</Button>
						</div>
						<div className={styles.outputList}>LISTA: {techArray}</div>
					</div>

					<Input
						type="text"
						className={styles.descriptionInput}
						placeholder="About company"
						{...register('offerDescription.aboutCompany')}
						required
					/>
					<Input
						type="text"
						className={styles.descriptionInput}
						placeholder="Offer heading"
						{...register('offerDescription.heading')}
						required
					/>
					<div className={styles.requirementsListBox}>
						<div className={styles.inputs}>
							<Input type="text" placeholder="Add requirements" required value={userValue} onChange={handleInputChange} />
							<Button type="button" color="primary" sizeVariant="small" onClick={handlerAddRequirements}>
								Add
							</Button>
						</div>
						<div className={styles.outputList}>LISTA: {requirements}</div>
					</div>
					<Input
						type="text"
						className={styles.descriptionInput}
						placeholder="Offer footer"
						{...register('offerDescription.footer')}
						required
					/>
				</div>
				<div className={styles.buttons}>
					<Button type="reset" color="secondary">
						Reset form
					</Button>
					<Button type="submit" color="tertiary">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddOfferForm;

// const addJob = async () => {
// 	const docRef = await addDoc(collection(db, 'jobs'), {
// 		companyName: 'Amazon',
// 		companyImg: 'https://img.icons8.com/color/48/null/amazon.png',
// 		currency: 'PLN',
// 		addedAt: Timestamp.fromDate(new Date()),
// 		location: 'Warsaw, Poland',
// 		position: 'Senior Web Developer',
// 		salaryFrom: '20000',
// 		salaryTo: '25000',
// 		salaryType: 'PLN',
// 		technologies: ['JavaScript', 'React.js', 'Vue.js', 'AWS', 'Cloud', 'Python'],
// 		offerDescription: {
// 			aboutCompany:
// 				'Join Amazon Project Kuiper. Project Kuiper is an initiative to launch a constellation of Low Earth Orbit satellites that will provide low-latency, high-speed broadband connectivity to unserved and underserved communities around the world.',
// 			footer: 'Join Amazon Project Kuiper.',
// 			heading:
// 				'You will architect the software infrastructure for RF test automation and ATE in the payload Antennas and Customer Terminal labs. You will develop the test framework for the internal team to create, track, update, change, and execute tests. This framework enables repeatable, discoverable tests, collects critical measurements, and simplifies test verification. You will work closely with Antenna&RF Engineers, System Developers, Software Developers, Digital and FPGA/DSP designers to help support them in the automation of existing testing. You will be the lab software liaison interfacing with external teams on integrating automated testing into acceptance procedures, qualification test procedures, payload integration test.',
// 			requirementsList: [
// 				'Determine automation requirements across the internal and external teams',
// 				'Develop automation services to optimize measurements, data management and analysis for antenna and customer terminal verification',
// 				'Train internal and external teams on test automation',
// 			],
// 		},
// 	});
// 	console.log('Document written with ID: ', docRef.id);
// };

// const addJob = async () => {
// 	const docRef = await addDoc(collection(db, 'jobs'), {
// 		companyName: '
// 		companyImg: 'https://img.icons8.com/color/48/null/amazon.png',
// 		currency:
// 		addedAt: Timestamp.fromDate(new Date()),
// 		location:
// 		position:
// 		salaryFrom:
// 		salaryTo:
// 		salaryType:
// 		technologies:
// 		offerDescription: {
// 			aboutCompany:
// 			footer:
// 			heading:
// 			requirementsList: [
//
// 			],
// 		},
// 	});

// };

