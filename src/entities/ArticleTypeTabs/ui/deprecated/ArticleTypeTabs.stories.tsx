import { Meta, StoryFn } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import type { ArticleTypeTabsProps } from './ArticleTypeTabs'

export default {
	title: 'deprecated/features/ArticleTypeTabs',
	component: ArticleTypeTabs,
	argTypes: {},
} as Meta<typeof ArticleTypeTabs>

const Template: StoryFn<typeof ArticleTypeTabs> = args => <ArticleTypeTabs {...args} />

export const Basic: StoryFn<ArticleTypeTabsProps> = Template.bind({})
Basic.args = {}
