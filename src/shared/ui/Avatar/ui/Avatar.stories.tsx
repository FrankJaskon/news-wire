import { Meta, StoryFn } from '@storybook/react'
import { Avatar, AvatarProps, AvatarVariant } from './Avatar'
import avatarImage from './storybook.jpg'

export default {
	title: 'shared/Avatar',
	component: Avatar,
	args: {}
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

export const Basic: StoryFn<AvatarProps> = Template.bind({})
Basic.args = {
	src: avatarImage,
}

export const Circle: StoryFn<AvatarProps> = Template.bind({})
Circle.args = {
	src: avatarImage,
	variant: AvatarVariant.CIRCLE,
}