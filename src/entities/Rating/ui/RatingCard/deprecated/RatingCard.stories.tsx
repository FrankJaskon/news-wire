import { Meta, StoryFn } from '@storybook/react'
import { RatingVariantDeprecated } from '../../../consts/consts'
import { RatingCard, RatingCardProps } from './RatingCard'

export default {
	title: 'entities/RatingCard/deprecated',
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
Small.args = {
	variant: RatingVariantDeprecated.SMALL,
}

export const Large: StoryFn<RatingCardProps> = Template.bind({})
Large.args = {
	variant: RatingVariantDeprecated.LARGE,
	title: 'Some title',
}
