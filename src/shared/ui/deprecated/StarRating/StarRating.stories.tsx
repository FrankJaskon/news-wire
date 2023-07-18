import { Meta, StoryFn } from '@storybook/react'
import { StarRating, StarRatingProps } from './StarRating'

export default {
	title: 'deprecated/shared/StarRating',
	component: StarRating,
	args: {},
} as Meta<typeof StarRating>

const Template: StoryFn<typeof StarRating> = args => <StarRating {...args} />

export const Basic: StoryFn<StarRatingProps> = Template.bind({})
Basic.args = {}
