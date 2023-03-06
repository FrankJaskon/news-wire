import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
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

export const Unauthorize: Story = Template.bind({})
Unauthorize.decorators = [StoreDecorator({})]

export const UnauthorizeDark: Story = Template.bind({})
UnauthorizeDark.decorators = [StoreDecorator({}), ThemeDecorator(appThemes.DARK)]

export const Authorize: Story = Template.bind({})
Authorize.decorators = [StoreDecorator({
	user: {
		authData: {
			id: 0,
			username: 'Test',
		}
	}
})]