import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { AuthorCommentsList, AuthorCommentsListProps } from './AuthorCommentsList'

export default {
	title: 'features/AuthorCommentsList',
	component: AuthorCommentsList,
	argTypes: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof AuthorCommentsList>

const Template: StoryFn<typeof AuthorCommentsList> = (args: any) => <AuthorCommentsList {...args} />

export const Basic: StoryFn<AuthorCommentsListProps> = Template.bind({})
Basic.parameters = {}
