import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { RatingCard, RatingCardProps } from './RatingCard'
import { RatingVariant } from '../../consts/consts'

export default {
	title: 'entities/RatingCard',
	component: RatingCard,
	argTypes: {},
	args: {},
	decorators: []
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />

export const Basic: Story<RatingCardProps> = Template.bind({})
Basic.args = {
	title: 'Some title'
}

export const Small: Story<RatingCardProps> = Template.bind({})
Small.args = {
	variant: RatingVariant.SMALL
}

export const Large: Story<RatingCardProps> = Template.bind({})
Large.args = {
	variant: RatingVariant.LARGE,
	title: 'Some title'
}