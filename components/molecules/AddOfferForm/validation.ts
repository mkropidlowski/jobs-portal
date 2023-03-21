import * as yup from 'yup';

const schema = {
	min100: 'Limit 100 characters.',
	max20: 'Limit 20 characters.',
	max80: 'Limit 80 characters.',
	max100: 'Limit 100 characters.',
	max300: 'Limit 300 characters.',
};

export const validationSchema = yup.object().shape({
	companyName: yup.string().required('To pole jest wymagane.').trim().max(80, schema.max80),
	currency: yup.string().required('To pole jest wymagane.').trim().max(20, schema.max20),
	location: yup.string().required('To pole jest wymagane.').trim().max(80, schema.max80),
	position: yup.string().required('To pole jest wymagane.').trim().max(100, schema.max100),
	salaryFrom: yup.string().required('To pole jest wymagane.').trim().max(20, schema.max20),
	salaryTo: yup.string().required('To pole jest wymagane.').trim().max(20, schema.max20),
	salaryType: yup.string().required('To pole jest wymagane.').trim().max(20, schema.max20),
	technologies: yup.string().required('To pole jest wymagane.'),
	offerDescription: yup.object().shape({
		aboutCompany: yup.string().required('To pole jest wymagane.').trim().max(300, schema.max300).min(100, schema.min100),
		footer: yup.string().required('To pole jest wymagane.').trim().max(300, schema.max300).min(100, schema.min100),
		heading: yup.string().required('To pole jest wymagane.').trim().max(300, schema.max300).min(100, schema.min100),
		requirementsList: yup.string().required('To pole jest wymagane.'),
	}),
});

