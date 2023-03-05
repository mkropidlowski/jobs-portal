import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoTemplate, { ILogo } from './Logo';

export default {
	title: 'templates/LogoTemplate',
	component: LogoTemplate,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof LogoTemplate>;
const Template: ComponentStory<typeof LogoTemplate> = (args) => <LogoTemplate {...args} />;

export const Logo = Template.bind({});

Logo.args = {} as ILogo;

