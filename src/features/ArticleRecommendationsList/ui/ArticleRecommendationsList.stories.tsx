import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ArticleRecommendationsList, ArticleRecommendationsListProps } from './ArticleRecommendationsList'

export default {
	title: 'shared/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {},
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => < ArticleRecommendationsList { ...args } />

export const Basic: Story<ArticleRecommendationsListProps> = Template.bind({})
Basic.args = {

}