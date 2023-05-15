import { Meta, StoryFn } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import { PageWrapper } from './PageWrapper'
import type { PageWrapperProps } from './PageWrapper'

export default {
	title: 'shared/PageWrapper',
	component: PageWrapper,
	argTypes: {},
	decorators: [StoreDecorator({})],
} as Meta<typeof PageWrapper>

const Template: StoryFn<typeof PageWrapper> = args => <PageWrapper {...args} />

export const Basic: StoryFn<PageWrapperProps> = Template.bind({})
Basic.args = {
	children: (
		<>
			<div>Text</div>
		</>
	),
}
