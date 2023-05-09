import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import type { ArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader'

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as Meta<typeof ArticleDetailsPageHeader>

const Template: StoryFn<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader { ...args } />

export const Basic: StoryFn<ArticleDetailsPageHeaderProps> = Template.bind({})
Basic.args = {
	articleId: 0,
}