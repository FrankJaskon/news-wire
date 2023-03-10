import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Profile } from 'pages/ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { ProfileCard, ProfileCardProps } from './ProfileCard'

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {},
	args: {},
	decorators: []
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

const profileData: Profile = {
	age: 20,
	firstname: 'Test',
	lastname: 'Test',
	city: 'Test',
	avatar: undefined,
	country: 'USA',
	currency: 'UAH',
	username: 'Test',
}

export const Basic: Story<ProfileCardProps> = Template.bind({})
Basic.args = {
	data: profileData
}

export const DarkTheme: Story<ProfileCardProps> = Template.bind({})
DarkTheme.args = {
	data: profileData
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]

export const Error: Story<ProfileCardProps> = Template.bind({})
Error.args = {
	error: 'Some error text'
}

export const LoadingMode: Story<ProfileCardProps> = Template.bind({})
LoadingMode.args = {
	data: profileData,
	isLoading: true,
}

export const EditMode: Story<ProfileCardProps> = Template.bind({})
EditMode.args = {
	data: profileData,
	readonly: false,
}