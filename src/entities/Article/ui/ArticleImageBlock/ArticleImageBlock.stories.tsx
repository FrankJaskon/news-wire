/* eslint-disable max-len */
import { Meta, StoryFn } from '@storybook/react'
import someImage from '@/shared/assets/icons/default-user.png'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ArticleImageBlock, ArticleImageBlockProps } from './ArticleImageBlock'

export default {
	title: 'entities/Article/ArticleImageBlock',
	component: ArticleImageBlock,
	argTypes: {},
	args: {
		src: someImage,
		title: 'Some text'
	},
	decorators: [StoreDecorator({})]
} as Meta<typeof ArticleImageBlock>

const Template: StoryFn<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />

export const Basic: StoryFn<ArticleImageBlockProps> = Template.bind({})
Basic.args = {
}

export const DarkTheme: StoryFn<ArticleImageBlockProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<ArticleImageBlockProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]