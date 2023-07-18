import { Meta, StoryFn } from '@storybook/react'
import { LoginButton, LoginButtonProps } from './LoginButton'

export default {
	title: 'features/Login/LoginButton',
	component: LoginButton,
	argTypes: {},
	args: {
		onSuccess: () => {},
	},
	decorators: [],
} as Meta<typeof LoginButton>

const Template: StoryFn<typeof LoginButton> = args => <LoginButton {...args} />

export const Basic: StoryFn<LoginButtonProps> = Template.bind({})
Basic.args = {}
Basic.decorators = []
