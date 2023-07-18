import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import type { ArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader'

export default {
	title: 'deprecated/pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {},
	decorators: [],
} as Meta<typeof ArticleDetailsPageHeader>

const Template: StoryFn<typeof ArticleDetailsPageHeader> = args => (
	<ArticleDetailsPageHeader {...args} />
)

export const Basic: StoryFn<ArticleDetailsPageHeaderProps> = Template.bind({})
Basic.args = {
	articleId: 1,
}
Basic.decorators = [
	StoreDecorator({
		user: { authData: { id: 1 } },
		articleDetails: { data: { profile: { id: 1 } } },
	}),
]
