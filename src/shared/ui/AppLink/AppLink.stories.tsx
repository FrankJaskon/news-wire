import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from 'shared/config/theme/ThemeContext'
import { AppLink, AppLinkVariant } from './AppLink'
import type { AppLinkProps } from './AppLink'

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/'
	}
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary: Story<AppLinkProps> = Template.bind({})
Primary.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}

export const PrimaryDark: Story<AppLinkProps> = Template.bind({})
PrimaryDark.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PrimaryPurple: Story<AppLinkProps> = Template.bind({})
PrimaryPurple.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY,
}
PrimaryPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Underlined: Story<AppLinkProps> = Template.bind({})
Underlined.args = {
	children: 'Click',
	variant: AppLinkVariant.UNDERLINED,
}

export const UnderlinedDark: Story<AppLinkProps> = Template.bind({})
UnderlinedDark.args = {
	children: 'Click',
	variant: AppLinkVariant.UNDERLINED,
}
UnderlinedDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const Secondary: Story<AppLinkProps> = Template.bind({})
Secondary.args = {
	children: 'Click',
	variant: AppLinkVariant.SECONDARY,
}

export const SecondaryDark: Story<AppLinkProps> = Template.bind({})
SecondaryDark.args = {
	children: 'Click',
	variant: AppLinkVariant.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const ButtonVariant: Story<AppLinkProps> = Template.bind({})
ButtonVariant.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY_BUTTON,
}

export const DarkButtonVariant: Story<AppLinkProps> = Template.bind({})
DarkButtonVariant.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY_BUTTON,
}
DarkButtonVariant.decorators = [ThemeDecorator(AppThemes.DARK)]