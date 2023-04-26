import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { RatingVariant } from '../../consts/consts'
import { RatingCard, RatingCardProps } from './RatingCard'

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