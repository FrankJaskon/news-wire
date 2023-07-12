import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { CommentCard } from './CommentCard'
import type { CommentCardProps } from './CommentCard'

export default {
	title: 'deprecated/entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {},
	args: {
		comment: {
			id: 1,
			text: 'some text',
			profile: {
				id: 1,
				username: 'some username',
			},
		},
		isLoading: false,
	},
} as Meta<typeof CommentCard>

const Template: StoryFn<typeof CommentCard> = args => <CommentCard {...args} />

export const Basic: StoryFn<CommentCardProps> = Template.bind({})
Basic.args = {}

export const Loading: StoryFn<CommentCardProps> = Template.bind({})
Loading.args = {
	isLoading: true,
}

export const DarkTheme: StoryFn<CommentCardProps> = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<CommentCardProps> = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
