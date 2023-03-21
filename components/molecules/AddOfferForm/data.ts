export const addOfferInputs = [
	{
		formKey: 'companyName',
		label: 'Company Name',
		inputType: 'text',
	},
	{
		formKey: 'companyImg',
		label: 'Company Logo',
		inputType: 'text',
	},
	{
		formKey: 'location',
		label: 'Location',
		inputType: 'text',
	},
	{
		formKey: 'position',
		label: 'Position',
		inputType: 'text',
	},
];

export type ResponseStatus = 'pending' | 'sent' | 'error';

export const formStatusCode = {
	pending: 'Seeending..',
	sent: 'Sent :)',
	default: 'Send',
};

