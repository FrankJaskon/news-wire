import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { LoginModal, LoginModalProps } from './LoginModal'

export default {
	title: 'features/Login/LoginModal',
	component: LoginModal,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as Meta<typeof LoginModal>

const Template: StoryFn<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Basic: StoryFn<LoginModalProps> = Template.bind({})
Basic.args = {
	isOpen: true
}

export const DarkTheme: StoryFn<LoginModalProps> = Template.bind({})
DarkTheme.args = {
	isOpen: true
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<LoginModalProps> = Template.bind({})
PurpleTheme.args = {
	isOpen: true
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]