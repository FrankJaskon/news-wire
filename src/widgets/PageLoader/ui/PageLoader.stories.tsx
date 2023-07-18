import { Meta, StoryFn } from '@storybook/react'
import { PageLoader } from './PageLoader'

export default {
	title: 'widgets/PageLoader',
	component: PageLoader,
	argTypes: {},
	args: {},
} as Meta<typeof PageLoader>

const Template: StoryFn<typeof PageLoader> = args => <PageLoader {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
