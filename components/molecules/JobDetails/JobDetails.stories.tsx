import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobDetails from './JobDetails';
import { ICard } from 'components/organisms/Offers/types';

export default {
	title: 'Components/Molecules/JobDetails',
	component: JobDetails,
	argTypes: {},
} as ComponentMeta<typeof JobDetails>;

const Template: ComponentStory<typeof JobDetails> = (args) => <JobDetails {...args} />;

export const JobTemplate = Template.bind({});

JobTemplate.args = {} as ICard;

