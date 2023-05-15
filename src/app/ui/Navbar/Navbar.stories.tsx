import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { Navbar } from './Navbar'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof Navbar>

const Template: StoryFn<typeof Navbar> = args => <Navbar {...args} />

export const Unauthorize: StoryFn = Template.bind({})

export const UnauthorizeDark: StoryFn = Template.bind({})
UnauthorizeDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const UnauthorizePurple: StoryFn = Template.bind({})
UnauthorizePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Authorize: StoryFn = Template.bind({})
Authorize.decorators = [
	StoreDecorator({
		user: {
			authData: {
				id: 0,
				username: 'Test',
			},
		},
	}),
]
