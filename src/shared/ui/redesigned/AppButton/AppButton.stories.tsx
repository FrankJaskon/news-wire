import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { AppButton, ButtonShape, ButtonSize, ButtonVariant } from './AppButton'

export default {
	title: 'shared/AppButton',
	component: AppButton,
	argTypes: {},
} as Meta<typeof AppButton>

const Template: StoryFn<typeof AppButton> = args => <AppButton {...args} />

export const Button: StoryFn = Template.bind({})
Button.args = {
	children: 'Click',
}

export const ButtonDark: StoryFn = Template.bind({})
ButtonDark.args = {
	children: 'Click',
}
ButtonDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ButtonPurple: StoryFn = Template.bind({})
ButtonPurple.args = {
	children: 'Click',
}
ButtonPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const ButtonDisabled: StoryFn = Template.bind({})
ButtonDisabled.args = {
	children: 'Click',
	disabled: true,
}

export const ButtonL: StoryFn = Template.bind({})
ButtonL.args = {
	children: 'Click',
	size: ButtonSize.L,
}

export const ButtonXL: StoryFn = Template.bind({})
ButtonXL.args = {
	children: 'Click',
	size: ButtonSize.XL,
}

export const Square: StoryFn = Template.bind({})
Square.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
}

export const SquareDark: StoryFn = Template.bind({})
SquareDark.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
}
SquareDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const SquareL: StoryFn = Template.bind({})
SquareL.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
	size: ButtonSize.L,
}

export const SquareXL: StoryFn = Template.bind({})
SquareXL.args = {
	children: '>',
	shape: ButtonShape.SQUARE,
	size: ButtonSize.XL,
}

export const Custom: StoryFn = Template.bind({})
Custom.args = {
	children: 'Click',
	variant: ButtonVariant.CUSTOM,
}

export const CustomDark: StoryFn = Template.bind({})
CustomDark.args = {
	children: 'Click',
	variant: ButtonVariant.CUSTOM,
}
CustomDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Outline: StoryFn = Template.bind({})
Outline.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
}

export const OutlineDark: StoryFn = Template.bind({})
OutlineDark.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OutlineSquare: StoryFn = Template.bind({})
OutlineSquare.args = {
	children: '>',
	variant: ButtonVariant.OUTLINE,
	shape: ButtonShape.SQUARE,
}

export const OutlineL: StoryFn = Template.bind({})
OutlineL.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.L,
}

export const OutlineXL: StoryFn = Template.bind({})
OutlineXL.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.XL,
}
