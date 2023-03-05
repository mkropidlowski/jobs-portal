import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseTemplate, { IBase } from './Base';
import { mockBaseTemplateProps } from './Base.mocks';

export default {
	title: 'templates/BaseTemplate',
	component: BaseTemplate,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => <BaseTemplate {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
	...mockBaseTemplateProps.base,
} as IBase;