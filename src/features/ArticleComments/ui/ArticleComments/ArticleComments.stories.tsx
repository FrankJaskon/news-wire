import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleComments } from './ArticleComments'
import type { ArticleCommentsProps } from './ArticleComments'

export default {
	title: 'features/ArticleComments',
	component: ArticleComments,
	argTypes: {},
	decorators: [StoreDecorator({
		articleDetailsComments: {
			isLoading: false,
			entities: {},
			ids: []
		}
	})]
} as ComponentMeta<typeof ArticleComments>

const Template: ComponentStory<typeof ArticleComments> = (args) => < ArticleComments { ...args } />

export const Basic: Story<ArticleCommentsProps> = Template.bind({})
Basic.args = {

}