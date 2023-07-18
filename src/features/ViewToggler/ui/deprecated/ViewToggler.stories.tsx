import { Meta, StoryFn } from '@storybook/react'
import { ViewToggler } from './ViewToggler'

export default {
	title: 'deprecated/features/ViewToggler',
	component: ViewToggler,
	argTypes: {},
} as Meta<typeof ViewToggler>

const Template: StoryFn<typeof ViewToggler> = args => <ViewToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
