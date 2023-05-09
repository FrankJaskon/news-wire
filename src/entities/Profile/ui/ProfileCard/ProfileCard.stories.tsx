import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ProfileType } from '../../model/types/profile'
import { ProfileCard, ProfileCardProps } from './ProfileCard'

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {},
	args: {},
	decorators: []
} as Meta<typeof ProfileCard>

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />

const profileData: ProfileType = {
	age: 20,
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
	data: profileData
}

export const DarkTheme: StoryFn<ProfileCardProps> = Template.bind({})
DarkTheme.args = {
	data: profileData
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<ProfileCardProps> = Template.bind({})
PurpleTheme.args = {
	data: profileData
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Error: StoryFn<ProfileCardProps> = Template.bind({})
Error.args = {
	error: 'Some error text'
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