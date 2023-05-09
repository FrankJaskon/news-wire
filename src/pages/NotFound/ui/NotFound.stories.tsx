import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { NotFound } from './NotFound'

export default {
	title: 'pages/NotFound',
	component: NotFound,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})]
} as Meta<typeof NotFound>

const Template: StoryFn<typeof NotFound> = (args) => <NotFound {...args} />

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