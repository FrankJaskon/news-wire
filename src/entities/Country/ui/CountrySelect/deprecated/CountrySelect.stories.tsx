import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
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

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
