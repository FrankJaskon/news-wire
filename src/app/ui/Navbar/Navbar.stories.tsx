import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { Navbar } from './Navbar'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unauthorize: Story = Template.bind({})

export const UnauthorizeDark: Story = Template.bind({})
UnauthorizeDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const UnauthorizePurple: Story = Template.bind({})
UnauthorizePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Authorize: Story = Template.bind({})
Authorize.decorators = [StoreDecorator({
	user: {
		authData: {
			id: 0,
			username: 'Test',
		}
	}
})]