import { Meta, StoryFn } from '@storybook/react'
import { Country } from '../../../model/consts/country'
import { CountrySelect } from './CountrySelect'

export default {
	title: 'deprecated/entities/CountrySelect',
	component: CountrySelect,
	argTypes: {},
	args: {
		value: Country.UKRAINE,
	},
	decorators: [],
} as Meta<typeof CountrySelect>

const Template: StoryFn<typeof CountrySelect> = args => <CountrySelect {...args} />

export const Basic: StoryFn = Template.bind({})
Basic.args = {}
