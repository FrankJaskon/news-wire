/* eslint-disable max-len */
import { Meta, StoryFn } from '@storybook/react'
import someImage from '@/shared/assets/icons/default-user.png'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import {
	EditableArticleImageBlock,
	EditableArticleImageBlockProps,
} from './EditableArticleImageBlock'

export default {
	title: 'entities/Article/EditableArticleImageBlock',
	component: EditableArticleImageBlock,
	argTypes: {},
	args: {
		src: someImage,
		title: 'Some text',
	},
	decorators: [StoreDecorator({})],
} as Meta<typeof EditableArticleImageBlock>

const Template: StoryFn<typeof EditableArticleImageBlock> = args => (
	<EditableArticleImageBlock {...args} />
)

export const Basic: StoryFn<EditableArticleImageBlockProps> = Template.bind({})
Basic.args = {}
