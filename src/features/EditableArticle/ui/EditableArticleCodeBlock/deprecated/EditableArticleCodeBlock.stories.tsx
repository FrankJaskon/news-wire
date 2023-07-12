/* eslint-disable max-len */
import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { EditableArticleCodeBlock, EditableArticleCodeBlockProps } from './EditableArticleCodeBlock'

export default {
	title: 'deprecated/entities/Article/EditableArticleCodeBlock',
	component: EditableArticleCodeBlock,
	argTypes: {},
	args: {
		code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
	},
	decorators: [StoreDecorator({})],
} as Meta<typeof EditableArticleCodeBlock>

const Template: StoryFn<typeof EditableArticleCodeBlock> = args => (
	<EditableArticleCodeBlock {...args} />
)

export const Basic: StoryFn<EditableArticleCodeBlockProps> = Template.bind({})
Basic.args = {}

export const DarkTheme: StoryFn<EditableArticleCodeBlockProps> = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<EditableArticleCodeBlockProps> = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
