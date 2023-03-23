import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { AppButton, ButtonShape, ButtonSize, ButtonVariant } from './AppButton'

export default {
	title: 'shared/AppButton',
	component: AppButton,
	argTypes: {},
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />

export const Button: Story = Template.bind({})
Button.args = {
	children: 'Click',
}

export const ButtonDark: Story = Template.bind({})
ButtonDark.args = {
	children: 'Click',
}
ButtonDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ButtonPurple: Story = Template.bind({})
ButtonPurple.args = {
	children: 'Click',
}
ButtonPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const ButtonDisabled: Story = Template.bind({})
ButtonDisabled.args = {
	children: 'Click',
	disabled: true
}

export const ButtonL: Story = Template.bind({})
ButtonL.args = {
	children: 'Click',
	size: ButtonSize.L
}

export const ButtonXL: Story = Template.bind({})
ButtonXL.args = {
	children: 'Click',
	size: ButtonSize.XL
}

export const Square: Story = Template.bind({})
Square.args = {
	children: '>',
	shape: ButtonShape.SQUARE
}

export const SquareDark: Story = Template.bind({})
SquareDark.args = {
	children: '>',
	shape: ButtonShape.SQUARE
}
SquareDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const SquareL: Story = Template.bind({})
SquareL.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
	size: ButtonSize.L
}

export const SquareXL: Story = Template.bind({})
SquareXL.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
	size: ButtonSize.XL
}

export const Custom: Story = Template.bind({})
Custom.args = {
	children: 'Click',
	variant: ButtonVariant.CUSTOM,
}

export const CustomDark: Story = Template.bind({})
CustomDark.args = {
	children: 'Click',
	variant: ButtonVariant.CUSTOM,
}
CustomDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Outline: Story = Template.bind({})
Outline.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
}

export const OutlineDark: Story = Template.bind({})
OutlineDark.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OutlineSquare: Story = Template.bind({})
OutlineSquare.args = {
	children: '>',
	variant: ButtonVariant.OUTLINE,
	shape: ButtonShape.SQUARE
}

export const OutlineL: Story = Template.bind({})
OutlineL.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.L
}

export const OutlineXL: Story = Template.bind({})
OutlineXL.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.XL
}
