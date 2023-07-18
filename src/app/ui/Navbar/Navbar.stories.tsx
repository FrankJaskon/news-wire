import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Navbar } from './Navbar'

export default {
	title: 'app/Navbar',
	component: Navbar,
	argTypes: {},
	decorators: [
		StoreDecorator({}),
		(Story: StoryFn) => <MainLayout sidebar={<div />} header={<Story />} content={<div />} />,
	],
} as Meta<typeof Navbar>

const Template: StoryFn<typeof Navbar> = args => <Navbar {...args} />

export const Unauthorize: StoryFn = Template.bind({})

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
