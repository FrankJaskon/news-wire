import { Meta, StoryFn } from '@storybook/react'
import someImage from '@/shared/assets/icons/default-user.png'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ArticleImageBlock, ArticleImageBlockProps } from './ArticleImageBlock'

export default {
	title: 'deprecated/entities/Article/ArticleImageBlock',
	component: ArticleImageBlock,
	argTypes: {},
	args: {
		src: someImage,
		title: 'Some text',
	},
	decorators: [StoreDecorator({})],
} as Meta<typeof ArticleImageBlock>

const Template: StoryFn<typeof ArticleImageBlock> = args => <ArticleImageBlock {...args} />

export const Basic: StoryFn<ArticleImageBlockProps> = Template.bind({})
Basic.args = {}
