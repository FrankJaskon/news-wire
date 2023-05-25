import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { LanguageToggler } from './LanguageToggler'

export default {
	title: 'features/LanguageToggler',
	component: LanguageToggler,
	argTypes: {},
	args: {},
} as Meta<typeof LanguageToggler>

const Template: StoryFn<typeof LanguageToggler> = args => <LanguageToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
