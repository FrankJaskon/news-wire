import { Meta, StoryFn } from '@storybook/react'
import { ErrorPage } from './ErrorPage'

export default {
	title: 'pages/ErrorPage',
	component: ErrorPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
} as Meta<typeof ErrorPage>

const Template: StoryFn<typeof ErrorPage> = args => <ErrorPage {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
