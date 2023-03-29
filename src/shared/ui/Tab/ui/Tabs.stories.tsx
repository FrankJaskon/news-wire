import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

export default {
	title: 'shared/Tab',
	component: Tabs,
	args: {
		tabs: [
			{
				value: 'tab 1',
				content: 'Tab 1'
			},
			{
				value: 'tab 2',
				content: 'Tab 2'
			},
		],
		onTabClick(tab) {},
		value: 'tab 1'
	}
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Basic: Story<TabsProps> = Template.bind({})
Basic.args = {
}