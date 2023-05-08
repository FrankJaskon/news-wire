import { Meta, StoryFn } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import ProfileRating, { ProfileRatingProps } from './ProfileRating'

export default {
	title: 'features/EditableProfileCard/ProfileRating',
	component: ProfileRating,
	argTypes: {},
	args: {},
	decorators: [withMock, StoreDecorator({})]
} as Meta<typeof ProfileRating>

const Template: StoryFn<typeof ProfileRating> = (args) => <ProfileRating { ...args } />

export const Basic: StoryFn<ProfileRatingProps> = Template.bind({})

Basic.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/profile-ratings`,
			__resourceQuery: 'userId=2&profileId=1',
			method: 'GET',
			status: 200,
			response: [
				{
					rating: 4
				}
			],
		},
	],
}

export const WithNoRating: StoryFn<ProfileRatingProps> = Template.bind({})

WithNoRating.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/profile-ratings`,
			__resourceQuery: 'userId=2&profileId=1',
			method: 'GET',
			status: 200,
			response: [],
		},
	],
}