import { Meta, StoryFn } from '@storybook/react'
import { Text, TextAlign, TextVariant } from './Text'

export default {
	title: 'deprecated/shared/Text',
	component: Text,
	argTypes: {},
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = args => <Text {...args} />

export const Primary: StoryFn = Template.bind({})
Primary.args = {
	title: 'Test',
	content: 'Test test test test test test',
}

export const PrimaryStart: StoryFn = Template.bind({})
PrimaryStart.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.START,
}

export const PrimaryEnd: StoryFn = Template.bind({})
PrimaryEnd.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.END,
}

export const PrimaryCenter: StoryFn = Template.bind({})
PrimaryCenter.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.CENTER,
}

export const PrimaryJustify: StoryFn = Template.bind({})
PrimaryJustify.args = {
	title: 'Test',
	content: 'Test test test test test test',
	align: TextAlign.JUSTIFY,
}

export const OnlyTitle: StoryFn = Template.bind({})
OnlyTitle.args = {
	title: 'Test',
}

export const OnlyContent: StoryFn = Template.bind({})
OnlyContent.args = {
	content: 'Test test test test test test',
}

export const Error: StoryFn = Template.bind({})
Error.args = {
	title: 'Test',
	content: 'Test test test test test test',
	variant: TextVariant.ERROR,
}
