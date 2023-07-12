import { Meta, StoryFn } from '@storybook/react'
import { AppCard } from './AppCard'
import type { AppCardProps } from './AppCard'

export default {
	title: 'deprecated/shared/AppCard',
	component: AppCard,
	argTypes: {},
} as Meta<typeof AppCard>

const Template: StoryFn<typeof AppCard> = args => <AppCard {...args} />

export const Basic: StoryFn<AppCardProps> = Template.bind({})
Basic.args = {
	children: <p>Some text</p>,
}
