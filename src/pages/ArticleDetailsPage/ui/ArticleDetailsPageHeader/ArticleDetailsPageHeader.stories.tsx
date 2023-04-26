import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import type { ArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader'

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => < ArticleDetailsPageHeader { ...args } />

export const Basic: Story<ArticleDetailsPageHeaderProps> = Template.bind({})
Basic.args = {
	articleId: 0,
}