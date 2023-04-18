import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import ProfilePage from './ProfilePage'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

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
	title: 'pages/ProfilePage',
	component: ProfilePage,
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
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Basic: Story = Template.bind({})

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story = Template.bind({})
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]