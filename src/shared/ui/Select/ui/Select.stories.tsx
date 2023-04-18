import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { AppLabel } from 'shared/ui/Form/Label'
import { Select, SelectProps } from './Select'

export default {
	title: 'shared/Select',
	component: Select,
	args: {
		Label: <AppLabel htmlFor='name'>Choose currency</AppLabel>,
		name: 'currency',
		value: { label: 'EUR', value: 'EUR' },
		options: [
			{ label: 'EUR', value: 'EUR' },
			{ label: 'ANY', value: 'ANY' }
		]
	}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Basic: Story<SelectProps> = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story<SelectProps> = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<SelectProps> = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]