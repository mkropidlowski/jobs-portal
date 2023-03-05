import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';

export default {
	title: 'Components/Molecules/Navbar',
	component: Navbar,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarTemplate = Template.bind({});
NavbarTemplate.args = {};

