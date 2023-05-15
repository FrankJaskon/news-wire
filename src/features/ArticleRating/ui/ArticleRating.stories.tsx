import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import ArticleRating, { ArticleRatingProps } from './ArticleRating'

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof ArticleRating>

const Template: StoryFn<typeof ArticleRating> = args => <ArticleRating {...args} />

export const Basic: StoryFn<ArticleRatingProps> = Template.bind({})

Basic.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/article-ratings`,
			__resourceQuery: 'userId=2&articleId=1',
			method: 'GET',
			status: 200,
			response: [
				{
					rating: 4,
				},
			],
		},
	],
}

export const WithNoRating: StoryFn<ArticleRatingProps> = Template.bind({})

WithNoRating.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/article-ratings`,
			__resourceQuery: 'userId=2&articleId=1',
			method: 'GET',
			status: 200,
			response: [],
		},
	],
}
