import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import LoginForm, { LoginFormProps } from './LoginForm'

export default {
	title: 'features/Login/LoginForm',
	component: LoginForm,
	argTypes: {},
	args: {
		onSuccess: () => {}
	},
	decorators: [StoreDecorator({
		login: { username: 'test', password: 'test' },
	})]
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Basic: Story<LoginFormProps> = Template.bind({})
Basic.args = {
}
Basic.decorators = []

export const DarkTheme: Story<LoginFormProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]

export const PurpleTheme: Story<LoginFormProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(appThemes.PURPLE)]