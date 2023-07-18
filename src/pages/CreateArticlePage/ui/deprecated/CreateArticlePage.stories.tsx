import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { CreateArticlePage } from './CreateArticlePage'

export default {
	title: 'deprecated/pages/CreateArticlePage',
	component: CreateArticlePage,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof CreateArticlePage>

const Template: StoryFn<typeof CreateArticlePage> = args => <CreateArticlePage {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
