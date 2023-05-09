import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import AddNewComment, { AddNewCommentProps } from './AddNewComment'

export default {
	title: 'features/AddNewComment',
	component: AddNewComment,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})]
} as Meta<typeof AddNewComment>

const Template: StoryFn<typeof AddNewComment> = (args) => <AddNewComment {...args} />

export const Basic: StoryFn<AddNewCommentProps> = Template.bind({})
Basic.args = {
}

export const BasicEdited: StoryFn<AddNewCommentProps> = Template.bind({})
BasicEdited.args = {
}
BasicEdited.decorators = [StoreDecorator({ addNewComment: { text: 'some text' }})]

export const DarkTheme: StoryFn<AddNewCommentProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn<AddNewCommentProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]