import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { LanguageToggler } from './LanguageToggler'

export default {
	title: 'features/LanguageToggler',
	component: LanguageToggler,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as ComponentMeta<typeof LanguageToggler>

const Template: ComponentStory<typeof LanguageToggler> = (args) => <LanguageToggler {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]