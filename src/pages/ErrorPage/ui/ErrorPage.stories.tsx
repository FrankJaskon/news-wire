import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ErrorPage } from './ErrorPage'

export default {
	title: 'pages/ErrorPage',
	component: ErrorPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as Meta<typeof ErrorPage>

const Template: StoryFn<typeof ErrorPage> = (args) => <ErrorPage {...args} />

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