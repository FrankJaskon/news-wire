import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { AppInput, AppInputProps, InputColor, InputVariant } from './AppInput'

export default {
	title: 'shared/Form/AppInput',
	component: AppInput,
	args: {
		value: 'Test'
	}
} as ComponentMeta<typeof AppInput>

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />

export const Basic: Story<AppInputProps> = Template.bind({})
Basic.args = {
}

export const BasicDark: Story<AppInputProps> = Template.bind({})
BasicDark.args = {
}
BasicDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const BasicPurple: Story<AppInputProps> = Template.bind({})
BasicPurple.args = {
}
BasicPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Clear: Story<AppInputProps> = Template.bind({})
Clear.args = {
	variant: InputVariant.CLEAR,
}

export const BasicPrimary: Story<AppInputProps> = Template.bind({})
BasicPrimary.args = {
	color: InputColor.PRIMARY
}

export const BasicSecondary: Story<AppInputProps> = Template.bind({})
BasicSecondary.args = {
	color: InputColor.SECONDARY
}

export const BasicReadonly: Story<AppInputProps> = Template.bind({})
BasicReadonly.args = {
	readonly: true
}