import { Meta, StoryFn } from '@storybook/react'
import { Avatar } from '../../../Avatar'
import { Dropdown, DropdownProps } from './Dropdown'

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	args: {},
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />

export const Basic: StoryFn<DropdownProps> = Template.bind({})
Basic.args = {
	trigger: <Avatar />,
	items: [
		{
			onClick: () => {
				'test'
			},
			component: <div>Menu item1</div>,
		},
		{
			onClick: () => {
				'test'
			},
			component: <div>Menu item2</div>,
		},
		{
			onClick: () => {
				'test'
			},
			component: <div>Menu item3</div>,
		},
		{
			onClick: () => {
				'test'
			},
			component: <div>Menu item4</div>,
		},
	],
}
