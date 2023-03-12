import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';
import { ICard } from '../types';

export default {
	title: 'Components/Molecules/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardTemplate = Template.bind({});

CardTemplate.args = {
	companyName: 'Facebook',
	position: 'Senior Front-end Developer',
	salaryFrom: '15000',
	salaryTo: '18000',
	salaryType: 'Brutto',
	currency: 'PLN',
	location: 'Warsaw, Poland',
	addedAt: '01.03.2023',
} as ICard;

