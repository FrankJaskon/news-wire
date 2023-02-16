import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import MainPage from './MainPage'

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]