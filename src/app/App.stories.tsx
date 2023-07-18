import { Meta, StoryFn } from '@storybook/react'
import App from './index'

export default {
	title: 'app/App',
	component: App,
	argTypes: {},
	args: {},
	decorators: [],
} as Meta<typeof App>

const Template: StoryFn<typeof App> = args => <App {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
