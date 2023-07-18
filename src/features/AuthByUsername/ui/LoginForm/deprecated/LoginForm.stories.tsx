import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { LoginForm, LoginFormProps } from './LoginForm'

export default {
	title: 'deprecated/features/Login/LoginForm',
	component: LoginForm,
	argTypes: {},
	args: {
		onSuccess: () => {},
	},
	decorators: [
		StoreDecorator({
			login: { username: 'test', password: 'test' },
		}),
	],
} as Meta<typeof LoginForm>

const Template: StoryFn<typeof LoginForm> = args => <LoginForm {...args} />

export const Basic: StoryFn<LoginFormProps> = Template.bind({})
Basic.args = {}
Basic.decorators = []
