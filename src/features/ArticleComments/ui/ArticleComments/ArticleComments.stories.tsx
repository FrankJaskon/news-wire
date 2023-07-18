import { Meta, StoryFn } from '@storybook/react'
import { CommentType } from '@/entities/Comment'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleComments } from './ArticleComments'
import type { ArticleCommentsProps } from './ArticleComments'

type MockComments = OptionalRecord<string, CommentType>

const getMockComments = (number: number): MockComments => {
	const comments: MockComments = {}

	for (let i = 0; i <= number; i++) {
		comments[`${i}`] = {
			article: {
				id: i,
				img: '',
				title: 'Test title',
				subtitle: 'Test subtitle',
			},
			id: i,
			profile: {
				id: i,
				username: 'Test user',
				avatar: '',
				roles: [],
			},
			text: 'Test comment',
		}
	}

	return comments
}

const getMockIds = (number: number): number[] => {
	const ids: number[] = []

	for (let i = 0; i <= number; i++) {
		ids.push(i)
	}

	return ids
}

export default {
	title: 'features/ArticleComments',
	component: ArticleComments,
	argTypes: {},
	decorators: [
		StoreDecorator({
			articleDetailsComments: {
				isLoading: false,
				entities: {},
				ids: [],
			},
		}),
	],
} as Meta<typeof ArticleComments>

const Template: StoryFn<typeof ArticleComments> = args => <ArticleComments {...args} />

export const Basic: StoryFn<ArticleCommentsProps> = Template.bind({})
Basic.args = {}

export const WithComments: StoryFn<ArticleCommentsProps> = Template.bind({})
const commentsNumber = 5
WithComments.args = {}
WithComments.decorators = [
	StoreDecorator({
		articleDetailsComments: {
			isLoading: false,
			entities: getMockComments(commentsNumber),
			ids: getMockIds(commentsNumber),
		},
	}),
]
