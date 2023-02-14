import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { AppButton, ButtonStyleInterface } from './AppButton'

export default {
	title: 'shared/AppButton',
	component: AppButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />

export const Primary: Story = Template.bind({})
Primary.args = {
	children: 'Click',
	variant: ButtonStyleInterface.PRIMARY,
}

export const PrimaryDark: Story = Template.bind({})
PrimaryDark.args = {
	children: 'Click',
	variant: ButtonStyleInterface.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const Clear: Story = Template.bind({})
Clear.args = {
	children: 'Click',
	variant: ButtonStyleInterface.CLEAR,
}

export const ClearDark: Story = Template.bind({})
ClearDark.args = {
	children: 'Click',
	variant: ButtonStyleInterface.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const Outline: Story = Template.bind({})
Outline.args = {
	children: 'Click',
	variant: ButtonStyleInterface.OUTLINE,
}

export const OutlineDark: Story = Template.bind({})
OutlineDark.args = {
	children: 'Click',
	variant: ButtonStyleInterface.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(appThemes.DARK)]