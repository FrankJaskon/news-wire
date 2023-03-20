import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { CommentsList } from './CommentsList'
import type { CommentsListProps } from './CommentsList'

const comments = [
	{
		id: 1,
		text: 'some text',
		user: {
			id: 1,
			username: 'some username',
		}
	},
	{
		id: 2,
		text: 'some text1',
		user: {
			id: 2,
			username: 'some username1',
		}
	},
	{
		id: 3,
		text: 'some text2',
		user: {
			id: 3,
			username: 'some username2',
		}
	},
]

export default {
	title: 'entities/Comment/CommentsList',
	component: CommentsList,
	argTypes: {},
	args: {
		comments,
		isLoading: false
	}
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = (args) => < CommentsList { ...args } />

export const Basic: Story<CommentsListProps> = Template.bind({})
Basic.args = {
}

export const Loading: Story<CommentsListProps> = Template.bind({})
Loading.args = {
	isLoading: true
}

export const Error: Story<CommentsListProps> = Template.bind({})
Error.args = {
	error: 'Some error'
}