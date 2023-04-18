import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton'
import { ArticleListItemSkeletonProps } from './ArticleListItemSkeleton'
import { ViewVariant } from '../../model/consts/articleDetailsConsts'

export default {
	title: 'entities/Article/ArticleListItemSkeleton',
	component: ArticleListItemSkeleton,
	argTypes: {},
	args: {}
} as ComponentMeta<typeof ArticleListItemSkeleton>

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => < ArticleListItemSkeleton { ...args } />

export const Basic: Story<ArticleListItemSkeletonProps> = Template.bind({})

export const List: Story<ArticleListItemSkeletonProps> = Template.bind({})
List.args = {
	view: ViewVariant.LIST
}