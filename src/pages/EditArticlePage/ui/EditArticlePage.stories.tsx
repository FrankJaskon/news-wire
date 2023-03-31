import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import EditArticlePage from './EditArticlePage'

export default {
	title: 'pages/EditArticlePage',
	component: EditArticlePage,
	argTypes: {},
	args: {},
	decorators: []
} as ComponentMeta<typeof EditArticlePage>

const Template: ComponentStory<typeof EditArticlePage> = (args) => <EditArticlePage {...args} />

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