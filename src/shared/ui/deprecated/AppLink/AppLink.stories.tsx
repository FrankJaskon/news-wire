import { Meta, StoryFn } from '@storybook/react'
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

export const Underlined: StoryFn<AppLinkProps> = Template.bind({})
Underlined.args = {
	children: 'Click',
	variant: AppLinkVariant.UNDERLINED,
}

export const Secondary: StoryFn<AppLinkProps> = Template.bind({})
Secondary.args = {
	children: 'Click',
	variant: AppLinkVariant.SECONDARY,
}

export const ButtonVariant: StoryFn<AppLinkProps> = Template.bind({})
ButtonVariant.args = {
	children: 'Click',
	variant: AppLinkVariant.PRIMARY_BUTTON,
}
