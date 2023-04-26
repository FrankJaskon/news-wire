import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { NotificationList, NotificationListProps } from './NotificationList'
import withMock from 'storybook-addon-mock'

export default {
	title: 'entities/NotificationList',
	component: NotificationList,
	argTypes: {},
	args: {},
	decorators: [withMock, StoreDecorator({})]
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => < NotificationList { ...args } />

export const Basic: Story<NotificationListProps> = Template.bind({})

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
					description: 'See your profile. Some user left there a reaction'
				},
				{
					id: 2,
					title: 'Your profile was liked',
					description: 'See your profile. Some user2 left there a reaction'
				},
				{
					id: 3,
					title: 'Your profile was liked',
					description: 'See your profile. Some user3 left there a reaction'
				},
				{
					id: 4,
					title: 'Your profile was liked',
					description: 'See your profile. Some user4 left there a reaction'
				}
			],
		},
	],
}