import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'
import { Avatar } from '../../../Avatar'

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	args: {}
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Basic: Story<DropdownProps> = Template.bind({})
Basic.args = {
	trigger: <Avatar />,
	items: [
		{
			onClick: () => {},
			component: <div>Menu item1</div>
		},
		{
			onClick: () => {},
			component: <div>Menu item2</div>
		},
		{
			onClick: () => {},
			component: <div>Menu item3</div>
		},
		{
			onClick: () => {},
			component: <div>Menu item4</div>
		},
	]
}