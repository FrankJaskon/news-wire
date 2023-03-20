/* eslint-disable max-len */
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { ArticleImageBlock, ArticleImageBlockProps } from './ArticleImageBlock'
import someImage from 'shared/assets/icons/default-user.png'

export default {
	title: 'entities/ArticleDetails/ArticleImageBlock',
	component: ArticleImageBlock,
	argTypes: {},
	args: {
		src: someImage,
		title: 'Some text'
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />

export const Basic: Story<ArticleImageBlockProps> = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story<ArticleImageBlockProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<ArticleImageBlockProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]