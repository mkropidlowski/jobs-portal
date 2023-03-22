import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactForm from './ContactForm';
import { IContactForm } from './types';

export default {
	title: 'Components/Molecules/ContactForm',
	component: ContactForm,

	argTypes: {},
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;

export const ContactFormView = Template.bind({});

ContactFormView.args = {} as IContactForm;

