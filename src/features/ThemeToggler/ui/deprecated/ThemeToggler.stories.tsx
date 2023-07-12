import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ThemeToggler } from './ThemeToggler'

export default {
	title: 'deprecated/features/ThemeToggler',
	component: ThemeToggler,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
} as Meta<typeof ThemeToggler>

const Template: StoryFn<typeof ThemeToggler> = args => <ThemeToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
