import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { PageWrapper } from './PageWrapper'
import type { PageWrapperProps } from './PageWrapper'

export default {
	title: 'shared/PageWrapper',
	component: PageWrapper,
	argTypes: {},
} as ComponentMeta<typeof PageWrapper>

const Template: ComponentStory<typeof PageWrapper> = (args) => < PageWrapper { ...args } />

export const Basic: Story<PageWrapperProps> = Template.bind({})
Basic.args = {

}