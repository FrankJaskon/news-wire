import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { Navbar } from './Navbar'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Basic: Story = Template.bind({})

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]