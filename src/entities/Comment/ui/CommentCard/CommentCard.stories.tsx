import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { CommentCard } from './CommentCard'
import type { CommentCardProps } from './CommentCard'

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {},
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => < CommentCard { ...args } />

export const Basic: Story<CommentCardProps> = Template.bind({})
Basic.args = {

}