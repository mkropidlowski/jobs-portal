import * as yup from 'yup';

// const schema = {};

export const validationSchema = yup.object().shape({
	companyName: yup.string().required('To pole jest wymagane.'),
});

