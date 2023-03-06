import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { AppLabel } from 'shared/ui/Form/Label'
import { Select, SelectProps } from './Select'

export default {
	title: 'shared/Select',
	component: Select,
	args: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Basic: Story<SelectProps> = Template.bind({})
Basic.args = {
	Label: <AppLabel htmlFor='name'>Choose currency</AppLabel>,
	name: 'currency',
	value: 'EUR',
	options: [{ label: 'EUR', value: 'EUR' }]
}