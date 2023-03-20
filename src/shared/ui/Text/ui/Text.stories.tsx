import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { Text, TextAlign, TextVariant } from './Text'

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary: Story = Template.bind({})
Primary.args = {
	title: 'Test',
	content: 'Test test test test test test',
}

export const PrimaryDark: Story = Template.bind({})
PrimaryDark.args = {
	title: 'Test',
	content: 'Test test test test test test',
}
PrimaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PrimaryPurple: Story = Template.bind({})
PrimaryPurple.args = {
	title: 'Test',
	content: 'Test test test test test test',
}
PrimaryPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const PrimaryStart: Story = Template.bind({})
PrimaryStart.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.START
}

export const PrimaryEnd: Story = Template.bind({})
PrimaryEnd.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.END
}

export const PrimaryCenter: Story = Template.bind({})
PrimaryCenter.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.CENTER
}

export const PrimaryJustify: Story = Template.bind({})
PrimaryJustify.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.JUSTIFY
}

export const OnlyTitle: Story = Template.bind({})
OnlyTitle.args = {
	title: 'Test',
}

export const OnlyTitleDark: Story = Template.bind({})
OnlyTitleDark.args = {
	title: 'Test',
}
OnlyTitleDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OnlyTitlePurple: Story = Template.bind({})
OnlyTitlePurple.args = {
	title: 'Test',
}
OnlyTitlePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const OnlyContent: Story = Template.bind({})
OnlyContent.args = {
	content: 'Test test test test test test',
}

export const OnlyContentDark: Story = Template.bind({})
OnlyContentDark.args = {
	content: 'Test test test test test test',
}
OnlyContentDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const OnlyContentPurple: Story = Template.bind({})
OnlyContentPurple.args = {
	content: 'Test test test test test test',
}
OnlyContentPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Error: Story = Template.bind({})
Error.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}

export const ErrorDark: Story = Template.bind({})
ErrorDark.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}
ErrorDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ErrorPurple: Story = Template.bind({})
ErrorPurple.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR
}
ErrorPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]