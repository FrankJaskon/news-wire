import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { Loader } from './Loader'

export default {
	title: 'deprecated/shared/Loader',
	component: Loader,
	argTypes: {},
	args: {},
} as Meta<typeof Loader>

const Template: StoryFn<typeof Loader> = args => <Loader {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
