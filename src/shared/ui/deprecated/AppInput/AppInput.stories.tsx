import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { AppInput, AppInputProps, InputColor, InputVariant } from './AppInput'

export default {
	title: 'shared/Form/AppInput',
	component: AppInput,
	args: {
		value: 'Test',
	},
} as Meta<typeof AppInput>

const Template: StoryFn<typeof AppInput> = args => <AppInput {...args} />

export const Basic: StoryFn<AppInputProps> = Template.bind({})
Basic.args = {}

export const BasicDark: StoryFn<AppInputProps> = Template.bind({})
BasicDark.args = {}
BasicDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const BasicPurple: StoryFn<AppInputProps> = Template.bind({})
BasicPurple.args = {}
BasicPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Clear: StoryFn<AppInputProps> = Template.bind({})
Clear.args = {
	variant: InputVariant.CLEAR,
}

export const BasicPrimary: StoryFn<AppInputProps> = Template.bind({})
BasicPrimary.args = {
	color: InputColor.PRIMARY,
}

export const BasicSecondary: StoryFn<AppInputProps> = Template.bind({})
BasicSecondary.args = {
	color: InputColor.SECONDARY,
}

export const BasicReadonly: StoryFn<AppInputProps> = Template.bind({})
BasicReadonly.args = {
	readonly: true,
}
