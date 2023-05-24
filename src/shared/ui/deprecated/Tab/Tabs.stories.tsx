import { Meta, StoryFn } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

export default {
	title: 'shared/Tab',
	component: Tabs,
	args: {
		tabs: [
			{
				value: 'tab 1',
				content: 'Tab 1',
			},
			{
				value: 'tab 2',
				content: 'Tab 2',
			},
		],
		onTabClick() {
			'test'
		},
		value: 'tab 1',
	},
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />

export const Basic: StoryFn<TabsProps> = Template.bind({})
Basic.args = {}
