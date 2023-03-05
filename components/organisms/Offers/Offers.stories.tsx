import { ComponentStory, ComponentMeta } from '@storybook/react';
import Offers, { IOffers } from './Offers';
import { mockCardData } from './data/fakeData';

export default {
	title: 'Components/Organisms/Offers',
	component: Offers,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof Offers>;

const Template: ComponentStory<typeof Offers> = (args) => <Offers {...args} />;

export const OffersTemplate = Template.bind({});

OffersTemplate.args = {
	...mockCardData,
} as IOffers;

