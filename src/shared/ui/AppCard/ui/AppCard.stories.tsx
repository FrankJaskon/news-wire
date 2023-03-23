import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { AppCard } from './AppCard'
import type { AppCardProps } from './AppCard'

export default {
	title: 'shared/AppCard',
	component: AppCard,
	argTypes: {},
} as ComponentMeta<typeof AppCard>

const Template: ComponentStory<typeof AppCard> = (args) => < AppCard { ...args } />

export const Basic: Story<AppCardProps> = Template.bind({})
Basic.args = {
	children: <p>Some text</p>
}