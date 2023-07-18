import { Meta, StoryFn } from '@storybook/react'
import { ProfileType } from '../../../model/types/profile'
import { ProfileCard, ProfileCardProps } from './ProfileCard'

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {},
	args: {},
	decorators: [],
} as Meta<typeof ProfileCard>

const Template: StoryFn<typeof ProfileCard> = args => <ProfileCard {...args} />

const profileData: ProfileType = {
	age: '20',
	firstname: 'Test',
	lastname: 'Test',
	city: 'Test',
	avatar: undefined,
	country: 'USA',
	currency: 'UAH',
	username: 'Test',
}

export const Basic: StoryFn<ProfileCardProps> = Template.bind({})
Basic.args = {
	data: profileData,
}

export const Error: StoryFn<ProfileCardProps> = Template.bind({})
Error.args = {
	error: 'Some error text',
}

export const LoadingMode: StoryFn<ProfileCardProps> = Template.bind({})
LoadingMode.args = {
	data: profileData,
	isLoading: true,
}

export const EditMode: StoryFn<ProfileCardProps> = Template.bind({})
EditMode.args = {
	data: profileData,
	readonly: false,
}
