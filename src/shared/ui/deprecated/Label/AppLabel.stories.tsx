import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { AppLabel, AppLabelProps } from './AppLabel'

export default {
	title: 'deprecated/shared/Form/AppLabel',
	component: AppLabel,
	args: {
		children: 'Test',
	},
} as Meta<typeof AppLabel>

const Template: StoryFn<typeof AppLabel> = args => <AppLabel {...args} />

export const Basic: StoryFn<AppLabelProps> = Template.bind({})
Basic.args = {}

export const BasicDark: StoryFn<AppLabelProps> = Template.bind({})
BasicDark.args = {}
BasicDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const BasicPurple: StoryFn<AppLabelProps> = Template.bind({})
BasicPurple.args = {}
BasicPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]
