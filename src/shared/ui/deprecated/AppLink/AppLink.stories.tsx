import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { AppLink, AppLinkVariant } from './AppLink'
import type { AppLinkProps } from './AppLink'

export default {
	title: 'deprecated/shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} as Meta<typeof AppLink>

const Template: StoryFn<typeof AppLink> = args => <AppLink {...args} />

export const Primary: StoryFn<AppLinkProps> = Template.bind({})
Primary.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}

export const PrimaryDark: StoryFn<AppLinkProps> = Template.bind({})
PrimaryDark.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PrimaryPurple: StoryFn<AppLinkProps> = Template.bind({})
PrimaryPurple.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}
PrimaryPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Underlined: StoryFn<AppLinkProps> = Template.bind({})
Underlined.args = {
	children: 'Click',
	variant: AppLinkVariant.UNDERLINED,
}

export const UnderlinedDark: StoryFn<AppLinkProps> = Template.bind({})
UnderlinedDark.args = {
	children: 'Click',
	variant: AppLinkVariant.UNDERLINED,
}
UnderlinedDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Secondary: StoryFn<AppLinkProps> = Template.bind({})
Secondary.args = {
	children: 'Click',
	variant: AppLinkVariant.SECONDARY,
}

export const SecondaryDark: StoryFn<AppLinkProps> = Template.bind({})
SecondaryDark.args = {
	children: 'Click',
	variant: AppLinkVariant.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ButtonVariant: StoryFn<AppLinkProps> = Template.bind({})
ButtonVariant.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY_BUTTON,
}

export const DarkButtonVariant: StoryFn<AppLinkProps> = Template.bind({})
DarkButtonVariant.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY_BUTTON,
}
DarkButtonVariant.decorators = [ThemeDecorator(AppThemes.DARK)]
