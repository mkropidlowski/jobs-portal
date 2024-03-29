import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	name: yup.string().required('To pole jest wymagane'),
	email: yup.string().required('To pole jest wymagane').email('Wprowadź poprawny adres e-mail.'),
	userMessage: yup.string().required('To pole jest wymagane'),
});

