import { StoryFn, Meta } from '@storybook/react'
import { ViewVariant } from '../../../model/consts/articleDetailsConsts'
import { ArticleListItemSkeleton, ArticleListItemSkeletonProps } from './ArticleListItemSkeleton'

export default {
	title: 'deprecated/entities/Article/ArticleListItemSkeleton',
	component: ArticleListItemSkeleton,
	argTypes: {},
	args: {},
} as Meta<typeof ArticleListItemSkeleton>

const Template: StoryFn<typeof ArticleListItemSkeleton> = args => (
	<ArticleListItemSkeleton {...args} />
)

export const Basic: StoryFn<ArticleListItemSkeletonProps> = Template.bind({})

export const List: StoryFn<ArticleListItemSkeletonProps> = Template.bind({})
List.args = {
	view: ViewVariant.LIST,
}
