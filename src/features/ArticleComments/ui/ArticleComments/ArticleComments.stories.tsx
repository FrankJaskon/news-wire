import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleComments } from './ArticleComments'
import type { ArticleCommentsProps } from './ArticleComments'

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
