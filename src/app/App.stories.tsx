import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import App from './index'

export default {
	title: 'app/App',
	component: App,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof App>

const Template: StoryFn<typeof App> = args => <App {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
