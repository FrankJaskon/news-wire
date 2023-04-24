import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import type { EditableProfileCardProps } from './EditableProfileCard'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'

const data = {
	age: 1,
	city: 'Test',
	id: 1,
	firstname: 'User',
	lastname: 'Test',
	username: 'Test user',
	currency: Currency.UAH,
	country: Country.UKRAINE
}

export default {
	title: 'features/EditableProfileCard',
	component: EditableProfileCard,
	argTypes: {},
	decorators: [StoreDecorator({
		profile: {
			isLoading: false,
			data: data,
			form: data,
		},
		user: {
			authData: {
				id: 1
			}
		}
	})]
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => < EditableProfileCard { ...args } />

export const Basic: Story<EditableProfileCardProps> = Template.bind({})

export const Dark: Story<EditableProfileCardProps> = Template.bind({})
Dark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Purple: Story<EditableProfileCardProps> = Template.bind({})
Purple.decorators = [ThemeDecorator(AppThemes.PURPLE)]