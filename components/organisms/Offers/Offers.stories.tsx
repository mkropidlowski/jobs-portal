import { ComponentStory, ComponentMeta } from '@storybook/react';
import Offers from './Offers';
import { ICard } from './types';

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

OffersTemplate.args = {} as ICard;

