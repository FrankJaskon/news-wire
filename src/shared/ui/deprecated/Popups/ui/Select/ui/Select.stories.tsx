import { Meta, StoryFn } from '@storybook/react'
import { AppLabel } from '@/shared/ui/deprecated/Label'
import { Select, SelectProps } from './Select'

export default {
	title: 'deprecated/shared/Select',
	component: Select,
	args: {
		Label: <AppLabel htmlFor='name'>Choose currency</AppLabel>,
		name: 'currency',
		value: { label: 'EUR', value: 'EUR' },
		options: [
			{ label: 'EUR', value: 'EUR' },
			{ label: 'ANY', value: 'ANY' },
		],
	},
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = args => <Select {...args} />

export const Basic: StoryFn<SelectProps<string>> = Template.bind({})
Basic.args = {}
