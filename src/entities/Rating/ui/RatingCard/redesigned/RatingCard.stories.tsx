import { Meta, StoryFn } from '@storybook/react'
import { RatingCard, RatingCardProps } from './RatingCard'

export default {
	title: 'entities/RatingCard',
	component: RatingCard,
	argTypes: {},
	args: {},
	decorators: [],
} as Meta<typeof RatingCard>

const Template: StoryFn<typeof RatingCard> = args => <RatingCard {...args} />

export const Basic: StoryFn<RatingCardProps> = Template.bind({})
Basic.args = {
	title: 'Some title',
}

export const Small: StoryFn<RatingCardProps> = Template.bind({})
Small.args = {}

export const Large: StoryFn<RatingCardProps> = Template.bind({})
Large.args = {
	title: 'Some title',
}
