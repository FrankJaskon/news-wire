import { Meta, StoryFn } from '@storybook/react'
import { AppButton } from './AppButton'

export default {
	title: 'shared/AppButton-redesigned',
	component: AppButton,
	argTypes: {},
} as Meta<typeof AppButton>

const Template: StoryFn<typeof AppButton> = args => <AppButton {...args} />

export const Button: StoryFn = Template.bind({})
Button.args = {
	children: 'Click',
}
