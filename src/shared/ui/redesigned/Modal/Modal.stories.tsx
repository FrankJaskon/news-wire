import { Meta, StoryFn } from '@storybook/react'
import { Modal } from './Modal'

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		isOpen: true,
		onClose: undefined,
	},
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = args => <Modal {...args}>Some text</Modal>

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
