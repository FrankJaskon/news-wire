import { Meta, StoryFn } from '@storybook/react'
import { Skeleton } from './Skeleton'
import type { SkeletonProps } from './Skeleton'

export default {
	title: 'deprecated/shared/Skeleton',
	component: Skeleton,
	argTypes: {},
} as Meta<typeof Skeleton>

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />

export const Basic: StoryFn<SkeletonProps> = Template.bind({})
Basic.args = {}

export const Circle: StoryFn<SkeletonProps> = Template.bind({})
Circle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
}
