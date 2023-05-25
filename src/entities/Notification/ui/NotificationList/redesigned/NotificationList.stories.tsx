import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { NotificationList, NotificationListProps } from './NotificationList'

export default {
	title: 'entities/NotificationList',
	component: NotificationList,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof NotificationList>

const Template: StoryFn<typeof NotificationList> = args => <NotificationList {...args} />

export const Basic: StoryFn<NotificationListProps> = Template.bind({})

Basic.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/notifications`,
			method: 'GET',
			status: 200,
			response: [
				{
					id: 1,
					title: 'Your profile was liked',
					description: 'See your profile. Some user left there a reaction',
				},
				{
					id: 2,
					title: 'Your profile was liked',
					description: 'See your profile. Some user2 left there a reaction',
				},
				{
					id: 3,
					title: 'Your profile was liked',
					description: 'See your profile. Some user3 left there a reaction',
				},
				{
					id: 4,
					title: 'Your profile was liked',
					description: 'See your profile. Some user4 left there a reaction',
				},
			],
		},
	],
}
