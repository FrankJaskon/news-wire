import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
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

export const BasicDark: StoryFn<SkeletonProps> = Template.bind({})
BasicDark.args = {}
BasicDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const BasicPurple: StoryFn<SkeletonProps> = Template.bind({})
BasicPurple.args = {}
BasicPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Circle: StoryFn<SkeletonProps> = Template.bind({})
Circle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
}

export const CircleDark: StoryFn<SkeletonProps> = Template.bind({})
CircleDark.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
}
CircleDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const CirclePurple: StoryFn<SkeletonProps> = Template.bind({})
CirclePurple.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
}
CirclePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]
