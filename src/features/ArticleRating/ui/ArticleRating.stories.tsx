import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import ArticleRating, { ArticleRatingProps } from './ArticleRating'
import withMock from 'storybook-addon-mock'

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {},
	args: {},
	decorators: [withMock, StoreDecorator({})]
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => < ArticleRating { ...args } />

export const Basic: Story<ArticleRatingProps> = Template.bind({})

Basic.parameters = {
	mockData: [
		{
			url: `${__API_URL__}/article-ratings`,
			__resourceQuery: 'userId=2&articleId=1',
			method: 'GET',
			status: 200,
			response: [
				{
					rating: 4
				}
			],
		},
	],
}

export const WithNoRating: Story<ArticleRatingProps> = Template.bind({})

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