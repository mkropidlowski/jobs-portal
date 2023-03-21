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
	const handleTechDelete = (item) => {
		const filterArray = techArray.slice();
		const index = filterArray.indexOf(item);
		filterArray.splice(index, 1);
		setTechArray(filterArray);
	};

	const handlerAddRequirements = () => {
		if (userValue.trim() !== '') {
			setRequirements([...requirements, userValue]);
		}
	};

	const handleRequirementsDelete = (item) => {
		const filterArray = requirements.slice();
		const index = filterArray.indexOf(item);
		filterArray.splice(index, 1);
		setRequirements(filterArray);
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
						<ul className={styles.outputList}>
							{techArray.map((techItem) => (
								<li key={techItem}>
									{techItem}
									<Button
										type="button"
										color="primary"
										sizeVariant="small"
										onClick={() => {
											handleTechDelete(techItem);
										}}
									>
										delete
									</Button>
								</li>
							))}
						</ul>
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
						<ul className={styles.outputList}>
							{requirements.map((items) => (
								<li key={items}>
									{items}
									<Button
										type="button"
										color="primary"
										sizeVariant="small"
										onClick={() => {
											handleRequirementsDelete(items);
										}}
									>
										delete
									</Button>
								</li>
							))}
						</ul>
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

