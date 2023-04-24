import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { PageWrapper } from './PageWrapper'
import type { PageWrapperProps } from './PageWrapper'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'

export default {
	title: 'shared/PageWrapper',
	component: PageWrapper,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof PageWrapper>

const Template: ComponentStory<typeof PageWrapper> = (args) => < PageWrapper { ...args } />

export const Basic: Story<PageWrapperProps> = Template.bind({})
Basic.args = {
	children: <>
		<div>Text</div>
	</>
}