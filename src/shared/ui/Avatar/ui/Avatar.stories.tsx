import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Avatar, AvatarProps, AvatarVariant } from './Avatar'
import avatarImage from './storybook.jpg'

export default {
	title: 'shared/Avatar',
	component: Avatar,
	args: {}
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Basic: Story<AvatarProps> = Template.bind({})
Basic.args = {
	src: avatarImage,
}

export const Circle: Story<AvatarProps> = Template.bind({})
Circle.args = {
	src: avatarImage,
	variant: AvatarVariant.CIRCLE,
}