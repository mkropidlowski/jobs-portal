import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input, { IInputTypeProps } from 'components/atoms/Input/Input';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formStatusCode, ResponseStatus } from '../AddOfferForm/data';
import styles from './contactForm.module.scss';
import { contactFormField } from './helpers/data';
import { validationSchema } from './helpers/validation';
import { IContactForm } from './types';

const ContactForm: React.FC<IContactForm> = () => {
	const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<IContactForm>({
		mode: 'all',
		resolver: yupResolver(validationSchema),
	});

	const submitForm = async () => {
		const getData = getValues();
		setResponseStatus('pending');
		try {
			console.log(getData);
			setResponseStatus('sent');
		} catch (error) {
			setResponseStatus('error');
		}
	};

	return (
		<div className={styles.container}>
			<Heading variant="h2" bold>
				Some questions?
			</Heading>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(submitForm)();
				}}
			>
				<div className={styles.inputs}>
					{contactFormField.map(({ formKey, inputType, placeholder }) => {
						const formInputKey = formKey as keyof IContactForm;
						const formInputType = inputType as IInputTypeProps;
						return (
							<Input
								key={formKey}
								{...register(formInputKey)}
								isError={!!errors[formInputKey]?.message}
								errorText={errors[formInputKey]?.message}
								type={formInputType}
								placeholder={placeholder}
								required
							/>
						);
					})}
				</div>
				<div className={styles.buttons}>
					<Button type="submit" color="tertiary" sizeVariant="small">
						{formStatusCode[responseStatus] ?? formStatusCode.default}
					</Button>
					<Link href="/">
						<Button type="submit" color="primary" sizeVariant="small">
							Return to homepage
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

