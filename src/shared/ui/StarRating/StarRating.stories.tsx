import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { StarRating, StarRatingProps } from './StarRating'

export default {
	title: 'shared/StarRating',
	component: StarRating,
	args: {}
} as Meta<typeof StarRating>

const Template: StoryFn<typeof StarRating> = (args) => <StarRating {...args} />

export const Basic: StoryFn<StarRatingProps> = Template.bind({})
Basic.args = {}

export const Dark: StoryFn<StarRatingProps> = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Purple: StoryFn<StarRatingProps> = Template.bind({})
Basic.args = {}
Purple.decorators = [ThemeDecorator(AppThemes.PURPLE)]