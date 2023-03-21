import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input, { IInputTypeProps } from 'components/atoms/Input/Input';
import { ICard } from 'components/organisms/Offers/types';
import { db } from 'config/firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { FC, useRef, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import styles from './addOfferForm.module.scss';
import { addOfferInputs, formStatusCode, ResponseStatus } from './data';
import { useForm } from 'react-hook-form';
import InputList from '../InputList/InputList';
import { validationSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

const AddOfferForm: FC = () => {
	const [techArray, setTechArray] = useState<string[]>([]);
	const [requirements, setRequirements] = useState<string[]>([]);
	const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<ICard>({
		mode: 'all',
		resolver: yupResolver(validationSchema),
	});

	const submitForm = async () => {
		const formData = getValues();
		setResponseStatus('pending');
		try {
			await addDoc(collection(db, 'jobs'), {
				companyName: formData.companyName,
				companyImg: 'https://img.icons8.com/color/48/null/company.png',
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
			setResponseStatus('sent');
			formRef.current?.reset();
			setRequirements([]);
			setTechArray([]);
		} catch (error) {
			setResponseStatus('error');
			console.log(error);
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
				ref={formRef}
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
								isError={!!errors[formInputKey]?.message}
								errorText={errors[formInputKey]?.message}
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
					<Input
						type="number"
						isError={!!errors.salaryFrom?.message}
						errorText={errors.salaryFrom?.message}
						placeholder="Min salary"
						{...register('salaryFrom')}
						required
						shouldRenderLabel={false}
					/>
					<span className={styles.minusChar}>-</span>
					<Input
						type="number"
						isError={!!errors.salaryTo?.message}
						errorText={errors.salaryTo?.message}
						placeholder="Max salary"
						{...register('salaryTo')}
						required
						shouldRenderLabel={false}
					/>
					<Input
						type="text"
						isError={!!errors.currency?.message}
						errorText={errors.currency?.message}
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
						isError={!!errors.salaryType?.message}
						errorText={errors.salaryType?.message}
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
						<InputList
							addItems={(item) => setTechArray([...techArray, item])}
							deleteItems={(item) => setTechArray(techArray.filter((techItem) => techItem !== item))}
							items={techArray}
							placeholder="Type technologies"
							isError={!!errors.technologies?.message}
							errorText={errors.technologies?.message}
						/>
					</div>

					<Input
						type="text"
						isError={!!errors.offerDescription?.aboutCompany?.message}
						errorText={errors.offerDescription?.aboutCompany?.message}
						className={styles.descriptionInput}
						placeholder="About company"
						{...register('offerDescription.aboutCompany')}
						required
					/>
					<Input
						type="text"
						isError={!!errors.offerDescription?.heading?.message}
						errorText={errors.offerDescription?.heading?.message}
						className={styles.descriptionInput}
						placeholder="Offer heading"
						{...register('offerDescription.heading')}
						required
					/>
					<div className={styles.requirementsListBox}>
						<InputList
							addItems={(item) => setRequirements([...requirements, item])}
							deleteItems={(item) => setRequirements(requirements.filter((requirementItem) => requirementItem !== item))}
							items={requirements}
							placeholder="Type requirements"
							isError={!!errors.offerDescription?.requirementsList?.message}
							errorText={errors.offerDescription?.requirementsList?.message}
						/>
					</div>
					<Input
						type="text"
						isError={!!errors.offerDescription?.footer?.message}
						errorText={errors.offerDescription?.footer?.message}
						className={clsx(styles.descriptionInput, styles.footerInput)}
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
						{formStatusCode[responseStatus] ?? formStatusCode.default}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddOfferForm;

