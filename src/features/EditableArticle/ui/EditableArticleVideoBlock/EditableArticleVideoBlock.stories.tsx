/* eslint-disable max-len */
import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import {
	EditableArticleVideoBlock,
	EditableArticleVideoBlockProps,
} from './EditableArticleVideoBlock'

export default {
	title: 'entities/Article/EditableArticleVideoBlock',
	component: EditableArticleVideoBlock,
	argTypes: {},
	args: {
		code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
	},
	decorators: [StoreDecorator({})],
} as Meta<typeof EditableArticleVideoBlock>

const Template: StoryFn<typeof EditableArticleVideoBlock> = args => (
	<EditableArticleVideoBlock {...args} />
)

export const Basic: StoryFn<EditableArticleVideoBlockProps> = Template.bind({})
Basic.args = {}
