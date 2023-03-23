import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { CommentCard } from './CommentCard'
import type { CommentCardProps } from './CommentCard'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {},
	args: {
		comment: {
			id: 1,
			text: 'some text',
			user: {
				id: 1,
				username: 'some username',
			}
		},
		isLoading: false
	}
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => < CommentCard {...args} />

export const Basic: Story<CommentCardProps> = Template.bind({})
Basic.args = {
}

export const Loading: Story<CommentCardProps> = Template.bind({})
Loading.args = {
	isLoading: true
}

export const DarkTheme: Story<CommentCardProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<CommentCardProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]