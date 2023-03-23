import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import AddNewComment, { AddNewCommentProps } from './AddNewComment'

export default {
	title: 'features/AddNewComment',
	component: AddNewComment,
	argTypes: {},
	args: {},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof AddNewComment>

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />

export const Basic: Story<AddNewCommentProps> = Template.bind({})
Basic.args = {
}

export const BasicEdited: Story<AddNewCommentProps> = Template.bind({})
BasicEdited.args = {
}
BasicEdited.decorators = [StoreDecorator({ addNewComment: { text: 'some text' }})]

export const DarkTheme: Story<AddNewCommentProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<AddNewCommentProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]