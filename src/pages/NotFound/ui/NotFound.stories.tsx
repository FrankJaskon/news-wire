import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { NotFound } from './NotFound'

export default {
	title: 'pages/NotFound',
	component: NotFound,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof NotFound>

const Template: StoryFn<typeof NotFound> = args => <NotFound {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
