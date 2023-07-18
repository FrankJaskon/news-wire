import { Meta, StoryFn } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'
import type { EditableProfileCardProps } from './EditableProfileCard'

const data = {
	age: '1',
	city: 'Test',
	id: 1,
	firstname: 'User',
	lastname: 'Test',
	username: 'Test user',
	currency: Currency.UAH,
	country: Country.UKRAINE,
}

export default {
	title: 'deprecated/features/EditableProfileCard',
	component: EditableProfileCard,
	argTypes: {},
	decorators: [
		StoreDecorator({
			profile: {
				isLoading: false,
				data: data,
				form: data,
			},
			user: {
				authData: {
					id: 1,
				},
			},
		}),
	],
} as Meta<typeof EditableProfileCard>

const Template: StoryFn<typeof EditableProfileCard> = args => <EditableProfileCard {...args} />

export const Basic: StoryFn<EditableProfileCardProps> = Template.bind({})
