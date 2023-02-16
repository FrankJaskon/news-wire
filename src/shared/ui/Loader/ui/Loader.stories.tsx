import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { Loader } from './Loader'

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {}
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Basic: Story = Template.bind({})
Basic.args = {
}

export const DarkTheme: Story = Template.bind({})
DarkTheme.args = {
}
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]