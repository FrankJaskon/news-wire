import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StarRating, StarRatingProps } from './StarRating'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'

export default {
	title: 'shared/StarRating',
	component: StarRating,
	args: {}
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />

export const Basic: Story<StarRatingProps> = Template.bind({})
Basic.args = {}

export const Dark: Story<StarRatingProps> = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Purple: Story<StarRatingProps> = Template.bind({})
Basic.args = {}
Purple.decorators = [ThemeDecorator(AppThemes.PURPLE)]