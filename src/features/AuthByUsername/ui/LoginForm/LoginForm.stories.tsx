import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import LoginForm from './LoginForm'

export default {
	title: 'features/Login/LoginForm',
	component: LoginForm,
	argTypes: {},
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {

}
Basic.decorators = [StoreDecorator()]

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {

}
DarkTheme.decorators = [StoreDecorator(), ThemeDecorator(appThemes.DARK)]