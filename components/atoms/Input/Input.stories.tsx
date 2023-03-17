import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { IInputProps } from './Input';

export default {
	title: 'Components/Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const onChange = () => {
	console.log('onChange clicked');
};

export const InputVariant = Template.bind({});

InputVariant.args = {
	placeholder: 'placeholder',
	type: 'text',
	onChange: onChange,
	id: 'id',
} as IInputProps;

