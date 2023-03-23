import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import type { ArticlesPageProps } from './ArticlesPage'

export default {
	title: 'pages/ArticlesPage',
	component: ArticlesPage,
	argTypes: {},
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => < ArticlesPage { ...args } />

export const Basic: Story<ArticlesPageProps> = Template.bind({})
Basic.args = {

}