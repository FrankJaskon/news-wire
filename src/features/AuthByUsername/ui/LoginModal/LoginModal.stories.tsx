import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { LoginModal } from './LoginModal'

export default {
	title: 'features/LoginModal',
	component: LoginModal,
	argTypes: {},
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Basic: Story = Template.bind({})

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]