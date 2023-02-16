import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import AboutPage from './AboutPage'

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
	decorators: []
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]