import { Meta, StoryFn } from '@storybook/react'
import { AppButton, ButtonShape, ButtonSize, ButtonVariant } from './AppButton'

export default {
	title: 'deprecated/shared/AppButton',
	component: AppButton,
	argTypes: {},
} as Meta<typeof AppButton>

const Template: StoryFn<typeof AppButton> = args => <AppButton {...args} />

export const Button: StoryFn = Template.bind({})
Button.args = {
	children: 'Click',
}

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

export const Outline: StoryFn = Template.bind({})
Outline.args = {
	children: 'Click',
	variant: ButtonVariant.OUTLINE,
}

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
