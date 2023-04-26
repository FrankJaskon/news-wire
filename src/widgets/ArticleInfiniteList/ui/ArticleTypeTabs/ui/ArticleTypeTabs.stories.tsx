import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import type { ArticleTypeTabsProps } from './ArticleTypeTabs'

export default {
	title: 'features/ArticleTypeTabs',
	component: ArticleTypeTabs,
	argTypes: {},
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => < ArticleTypeTabs { ...args } />

export const Basic: Story<ArticleTypeTabsProps> = Template.bind({})
Basic.args = {

}