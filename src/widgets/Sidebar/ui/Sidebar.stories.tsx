import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { Sidebar } from './Sidebar'

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Basic: Story = Template.bind({})

export const SidebarAuthorized: Story = Template.bind({})
SidebarAuthorized.decorators = [StoreDecorator({ user: { authData: {}}})]

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator('dark')]

export const PurpleTheme: Story = Template.bind({})
PurpleTheme.decorators = [ThemeDecorator('purple')]