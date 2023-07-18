import { Meta, StoryFn } from '@storybook/react'
import { ThemeToggler } from './ThemeToggler'

export default {
	title: 'features/ThemeToggler',
	component: ThemeToggler,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
} as Meta<typeof ThemeToggler>

const Template: StoryFn<typeof ThemeToggler> = args => <ThemeToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
