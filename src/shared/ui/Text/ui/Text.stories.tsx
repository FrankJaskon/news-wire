import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { Text, TextAlign, TextVariant } from './Text'

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {},
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />

export const Primary: StoryFn = Template.bind({})
Primary.args = {
	title: 'Test',
	content: 'Test test test test test test',
}

export const PrimaryDark: StoryFn = Template.bind({})
PrimaryDark.args = {
	title: 'Test',
	content: 'Test test test test test test',
}
PrimaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PrimaryPurple: StoryFn = Template.bind({})
PrimaryPurple.args = {
	title: 'Test',
	content: 'Test test test test test test',
}
PrimaryPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const PrimaryStart: StoryFn = Template.bind({})
PrimaryStart.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.START
}

export const PrimaryEnd: StoryFn = Template.bind({})
PrimaryEnd.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.END
}

export const PrimaryCenter: StoryFn = Template.bind({})
PrimaryCenter.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.CENTER
}

export const PrimaryJustify: StoryFn = Template.bind({})
PrimaryJustify.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.JUSTIFY
}

export const OnlyTitle: StoryFn = Template.bind({})
OnlyTitle.args = {
	title: 'Test',
}

export const OnlyTitleDark: StoryFn = Template.bind({})
OnlyTitleDark.args = {
	title: 'Test',
}
OnlyTitleDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OnlyTitlePurple: StoryFn = Template.bind({})
OnlyTitlePurple.args = {
	title: 'Test',
}
OnlyTitlePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const OnlyContent: StoryFn = Template.bind({})
OnlyContent.args = {
	content: 'Test test test test test test',
}

export const OnlyContentDark: StoryFn = Template.bind({})
OnlyContentDark.args = {
	content: 'Test test test test test test',
}
OnlyContentDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OnlyContentPurple: StoryFn = Template.bind({})
OnlyContentPurple.args = {
	content: 'Test test test test test test',
}
OnlyContentPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Error: StoryFn = Template.bind({})
Error.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}

export const ErrorDark: StoryFn = Template.bind({})
ErrorDark.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}
ErrorDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ErrorPurple: StoryFn = Template.bind({})
ErrorPurple.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}
ErrorPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]