import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import App from './index'

export default {
	title: 'app/App',
	component: App,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]