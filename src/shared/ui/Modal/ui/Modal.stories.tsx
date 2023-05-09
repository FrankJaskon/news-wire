import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { Modal } from './Modal'

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		isOpen: true,
		onClose: undefined
	}
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args}>Some text</Modal>

export const Basic: StoryFn = Template.bind({})
Basic.args = {
}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]