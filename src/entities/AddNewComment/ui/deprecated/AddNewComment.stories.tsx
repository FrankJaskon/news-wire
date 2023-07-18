import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { AddNewComment, AddNewCommentProps } from './AddNewComment'

export default {
	title: 'deprecated/features/AddNewComment',
	component: AddNewComment,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof AddNewComment>

const Template: StoryFn<typeof AddNewComment> = args => <AddNewComment {...args} />

export const Basic: StoryFn<AddNewCommentProps> = Template.bind({})
Basic.args = {}

export const BasicEdited: StoryFn<AddNewCommentProps> = Template.bind({})
BasicEdited.args = {}
BasicEdited.decorators = [StoreDecorator({ addNewComment: { text: 'some text' } })]
