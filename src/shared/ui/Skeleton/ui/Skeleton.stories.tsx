import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Skeleton } from './Skeleton'
import type { SkeletonProps } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { AppThemes } from 'shared/config/theme/ThemeContext'

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => < Skeleton { ...args } />

export const Basic: Story<SkeletonProps> = Template.bind({})
Basic.args = {
}

export const BasicDark: Story<SkeletonProps> = Template.bind({})
BasicDark.args = {
}
BasicDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const BasicPurple: Story<SkeletonProps> = Template.bind({})
BasicPurple.args = {
}
BasicPurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]

export const Circle: Story<SkeletonProps> = Template.bind({})
Circle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100
}

export const CircleDark: Story<SkeletonProps> = Template.bind({})
CircleDark.args = {
	borderRadius: '50%',
	width: 100,
	height: 100
}
CircleDark.decorators = [ThemeDecorator(AppThemes.DARK)]

export const CirclePurple: Story<SkeletonProps> = Template.bind({})
CirclePurple.args = {
	borderRadius: '50%',
	width: 100,
	height: 100
}
CirclePurple.decorators = [ThemeDecorator(AppThemes.PURPLE)]