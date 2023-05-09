import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { AppLabel } from '../../../../Form/Label'
import { Select, SelectProps } from './Select'

export default {
	title: 'shared/Select',
	component: Select,
	args: {
		Label: <AppLabel htmlFor='name'>Choose currency</AppLabel>,
		name: 'currency',
		value: { label: 'EUR', value: 'EUR' },
		options: [
			{ label: 'EUR', value: 'EUR' },
			{ label: 'ANY', value: 'ANY' }
		]
	}
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Basic: StoryFn<SelectProps<string>> = Template.bind({})
Basic.args = {
}

export const DarkTheme: StoryFn<SelectProps<string>> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<SelectProps<string>> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]