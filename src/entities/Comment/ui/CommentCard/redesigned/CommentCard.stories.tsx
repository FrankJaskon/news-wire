import { Meta, StoryFn } from '@storybook/react'
import { CommentCard } from './CommentCard'
import type { CommentCardProps } from './CommentCard'

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {},
	args: {
		comment: {
			id: 1,
			text: 'some text',
			profile: {
				id: 1,
				username: 'some username',
			},
		},
		isLoading: false,
	},
} as Meta<typeof CommentCard>

const Template: StoryFn<typeof CommentCard> = args => <CommentCard {...args} />

export const Basic: StoryFn<CommentCardProps> = Template.bind({})
Basic.args = {}

export const Loading: StoryFn<CommentCardProps> = Template.bind({})
Loading.args = {
	isLoading: true,
}
