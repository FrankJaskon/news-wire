import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
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

export const DarkTheme: StoryFn = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: StoryFn = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]
