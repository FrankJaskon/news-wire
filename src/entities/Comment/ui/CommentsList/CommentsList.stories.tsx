import { Meta, StoryFn } from '@storybook/react'
import { CommentsList } from './CommentsList'
import type { CommentsListProps } from './CommentsList'

const comments = [
	{
		id: 1,
		text: 'some text',
		profile: {
			id: 1,
			username: 'some username',
		},
	},
	{
		id: 2,
		text: 'some text1',
		profile: {
			id: 2,
			username: 'some username1',
		},
	},
	{
		id: 3,
		text: 'some text2',
		profile: {
			id: 3,
			username: 'some username2',
		},
	},
]

export default {
	title: 'entities/Comment/CommentsList',
	component: CommentsList,
	argTypes: {},
	args: {
		comments,
		isLoading: false,
	},
} as Meta<typeof CommentsList>

const Template: StoryFn<typeof CommentsList> = args => <CommentsList {...args} />

export const Basic: StoryFn<CommentsListProps> = Template.bind({})
Basic.args = {}

export const Loading: StoryFn<CommentsListProps> = Template.bind({})
Loading.args = {
	isLoading: true,
}

export const Error: StoryFn<CommentsListProps> = Template.bind({})
Error.args = {
	error: 'Some error',
}
