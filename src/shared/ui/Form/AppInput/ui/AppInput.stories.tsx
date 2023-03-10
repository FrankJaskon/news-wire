import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { AppInput, AppInputProps, InputVariant } from './AppInput'

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
BasicDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const BasicPurple: Story<AppInputProps> = Template.bind({})
BasicPurple.args = {
}
BasicPurple.decorators = [ThemeDecorator(appThemes.PURPLE)]

export const Clear: Story<AppInputProps> = Template.bind({})
Clear.args = {
	variant: InputVariant.CLEAR,
}

export const BasicPrimary: Story<AppInputProps> = Template.bind({})
BasicPrimary.args = {
	color: 'primary-color'
}

export const BasicSecondary: Story<AppInputProps> = Template.bind({})
BasicSecondary.args = {
	color: 'secondary-color'
}

export const BasicReadonly: Story<AppInputProps> = Template.bind({})
BasicReadonly.args = {
	readonly: true
}