import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { MainPage } from './MainPage'

export default {
	title: 'deprecated/pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof MainPage>

const Template: StoryFn<typeof MainPage> = args => <MainPage {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
