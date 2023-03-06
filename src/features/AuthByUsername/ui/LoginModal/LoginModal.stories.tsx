import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { LoginModal, LoginModalProps } from './LoginModal'

export default {
	title: 'features/Login/LoginModal',
	component: LoginModal,
	argTypes: {},
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Basic: Story<LoginModalProps> = Template.bind({})
Basic.args = {
	isOpen: true
}
Basic.decorators = [StoreDecorator({})]

export const DarkTheme: Story<LoginModalProps> = Template.bind({})
DarkTheme.args = {
	isOpen: true
}
DarkTheme.decorators = [StoreDecorator({}), ThemeDecorator(appThemes.DARK)]