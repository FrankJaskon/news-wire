import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import AboutPage from './AboutPage'

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof AboutPage>

const Template: StoryFn<typeof AboutPage> = args => <AboutPage {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
