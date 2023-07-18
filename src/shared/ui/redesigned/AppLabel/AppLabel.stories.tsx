import { Meta, StoryFn } from '@storybook/react'
import { AppLabel, AppLabelProps } from './AppLabel'

export default {
	title: 'shared/Form/AppLabel',
	component: AppLabel,
	args: {
		children: 'Test',
	},
} as Meta<typeof AppLabel>

const Template: StoryFn<typeof AppLabel> = args => <AppLabel {...args} />

export const Basic: StoryFn<AppLabelProps> = Template.bind({})
Basic.args = {}
