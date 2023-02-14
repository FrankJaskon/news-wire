import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { Sidebar } from './Sidebar'

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Basic: Story = Template.bind({})

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]