import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero, { IHero } from './Hero';
import { mockHero } from './Hero.mocks';

export default {
	title: 'Components/Organisms/Hero',
	component: Hero,
	argTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HeroTemplate = Template.bind({});
HeroTemplate.args = {
	...mockHero,
} as IHero;

