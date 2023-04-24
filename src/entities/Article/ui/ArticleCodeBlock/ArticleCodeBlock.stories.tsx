/* eslint-disable max-len */
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ArticleCodeBlock, ArticleCodeBlockProps } from './ArticleCodeBlock'

export default {
	title: 'entities/Article/ArticleCodeBlock',
	component: ArticleCodeBlock,
	argTypes: {},
	args: {
		code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\'hello\'></p>\n\n    <script>\n      document.getElementById(\'hello\').innerHTML = \'Hello, world!\';\n    </script>\n  </body>\n</html>;'
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleCodeBlock>

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />

export const Basic: Story<ArticleCodeBlockProps> = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story<ArticleCodeBlockProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<ArticleCodeBlockProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]