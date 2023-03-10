import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { AppLink, AppLinkTheme } from './AppLink'
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
	variant: AppLinkTheme.PRIMARY,
}

export const PrimaryDark: Story<AppLinkProps> = Template.bind({})
PrimaryDark.args = {
	children: 'Click',
	variant: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const Underlined: Story<AppLinkProps> = Template.bind({})
Underlined.args = {
	children: 'Click',
	variant: AppLinkTheme.UNDERLINED,
}

export const UnderlinedDark: Story<AppLinkProps> = Template.bind({})
UnderlinedDark.args = {
	children: 'Click',
	variant: AppLinkTheme.UNDERLINED,
}
UnderlinedDark.decorators = [ThemeDecorator(appThemes.DARK)]

export const Secondary: Story<AppLinkProps> = Template.bind({})
Secondary.args = {
	children: 'Click',
	variant: AppLinkTheme.SECONDARY,
}

export const SecondaryDark: Story<AppLinkProps> = Template.bind({})
SecondaryDark.args = {
	children: 'Click',
	variant: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(appThemes.DARK)]