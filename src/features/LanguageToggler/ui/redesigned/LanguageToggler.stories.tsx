import { Meta, StoryFn } from '@storybook/react'
import { LanguageToggler } from './LanguageToggler'

export default {
	title: 'features/LanguageToggler',
	component: LanguageToggler,
	argTypes: {},
	args: {},
} as Meta<typeof LanguageToggler>

const Template: StoryFn<typeof LanguageToggler> = args => <LanguageToggler {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
