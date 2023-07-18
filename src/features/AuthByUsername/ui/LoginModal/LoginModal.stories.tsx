import { Meta, StoryFn } from '@storybook/react'
import { LoginModal, LoginModalProps } from './LoginModal'

export default {
	title: 'features/Login/LoginModal',
	component: LoginModal,
	argTypes: {},
	decorators: [],
} as Meta<typeof LoginModal>

const Template: StoryFn<typeof LoginModal> = args => <LoginModal {...args} />

export const Basic: StoryFn<LoginModalProps> = Template.bind({})
Basic.args = {
	isOpen: true,
}
