import { Meta, StoryFn } from '@storybook/react'
import { ViewToggler } from './ViewToggler'

export default {
	title: 'features/ViewToggler',
	component: ViewToggler,
	argTypes: {},
} as Meta<typeof ViewToggler>

const Template: StoryFn<typeof ViewToggler> = args => <ViewToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {
	activeView: 'grid',
	variant: 'articleView',
	viewsList: [
		{ view: 'grid', content: 'grid' },
		{ view: 'list', content: 'list' },
	],
	onToggle: () => {
		// blank
	},
}
