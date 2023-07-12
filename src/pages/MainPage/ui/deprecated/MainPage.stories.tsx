import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { MainPage } from './MainPage'

export default {
	title: 'deprecated/pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof MainPage>

const Template: StoryFn<typeof MainPage> = args => <MainPage {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
