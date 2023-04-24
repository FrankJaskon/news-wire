import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { LanguageToggler } from './LanguageToggler'

export default {
	title: 'features/LanguageToggler',
	component: LanguageToggler,
	argTypes: {},
	args: {}
} as ComponentMeta<typeof LanguageToggler>

const Template: ComponentStory<typeof LanguageToggler> = (args) => <LanguageToggler {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story = Template.bind({})
PurpleTheme.args = {
}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]