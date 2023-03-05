import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from './Heading';

export default {
	title: 'Components/Atoms/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingTemplate = Template.bind({});

HeadingTemplate.args = { children: 'Heading', variant: 'h1' };

