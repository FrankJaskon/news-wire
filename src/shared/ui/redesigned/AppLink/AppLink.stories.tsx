import { Meta, StoryFn } from '@storybook/react'
import { AppLink } from './AppLink'
import type { AppLinkProps } from './AppLink'

export default {
	title: 'shared/AppLink-redesigned',
	component: AppLink,
	args: {
		to: '/',
		variant: 'primary',
	},
} as Meta<typeof AppLink>

const Template: StoryFn<typeof AppLink> = args => <AppLink {...args} />

export const Primary: StoryFn<AppLinkProps> = Template.bind({})
Primary.args = {
	children: 'Click',
}
