import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ViewToggler } from './ViewToggler'
import type { ViewTogglerProps } from './ViewToggler'

export default {
	title: 'features/ViewToggler',
	component: ViewToggler,
	argTypes: {},
} as Meta<typeof ViewToggler>

const Template: StoryFn<typeof ViewToggler> = (args) => <ViewToggler { ...args } />

export const Basic: StoryFn<ViewTogglerProps> = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn<ViewTogglerProps> = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<ViewTogglerProps> = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]