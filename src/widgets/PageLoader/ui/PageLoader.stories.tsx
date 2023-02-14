import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { PageLoader } from './PageLoader'

export default {
	title: 'widgets/PageLoader',
	component: PageLoader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]