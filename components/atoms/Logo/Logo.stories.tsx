import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo, { ILogo } from './Logo';

export default {
	title: 'Components/Atoms/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof Logo>;
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoVariant = Template.bind({});

LogoVariant.args = {} as ILogo;

