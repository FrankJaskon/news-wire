import { Meta, StoryFn } from '@storybook/react'
import { Currency } from '../../../model/types/CurrencyScheme'
import { CurrencySelect } from './CurrencySelect'

export default {
	title: 'deprecated/entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {},
	args: {
		value: Currency.UAH,
	},
	decorators: [],
} as Meta<typeof CurrencySelect>

const Template: StoryFn<typeof CurrencySelect> = args => <CurrencySelect {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
