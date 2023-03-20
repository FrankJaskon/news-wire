import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { CommentsList } from './CommentsList'
import type { CommentsListProps } from './CommentsList'

export default {
	title: 'entities/Comment/CommentsList',
	component: CommentsList,
	argTypes: {},
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = (args) => < CommentsList { ...args } />

export const Basic: Story<CommentsListProps> = Template.bind({})
Basic.args = {

}