import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { Text, TextVariant } from './Text'

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
PrimaryDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const OnlyTitle: Story = Template.bind({})
OnlyTitle.args = {
	title: 'Test',
}

export const OnlyTitleDark: Story = Template.bind({})
OnlyTitleDark.args = {
	title: 'Test',
}
OnlyTitleDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const OnlyContent: Story = Template.bind({})
OnlyContent.args = {
	content: 'Test test test test test test',
}

export const OnlyContentDark: Story = Template.bind({})
OnlyContentDark.args = {
	content: 'Test test test test test test',
}
OnlyContentDark.decorators = [ThemeDecorator(appThemes.DARK)]

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
ErrorDark.decorators = [ThemeDecorator(appThemes.DARK)]