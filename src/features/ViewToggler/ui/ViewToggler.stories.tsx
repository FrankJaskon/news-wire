import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import { ViewToggler } from './ViewToggler'
import type { ViewTogglerProps } from './ViewToggler'

export default {
	title: 'features/ViewToggler',
	component: ViewToggler,
	argTypes: {},
} as ComponentMeta<typeof ViewToggler>

const Template: ComponentStory<typeof ViewToggler> = (args) => < ViewToggler { ...args } />

export const Basic: Story<ViewTogglerProps> = Template.bind({})
Basic.args = {}

export const DarkTheme: Story<ViewTogglerProps> = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(AppThemes.DARK)]

export const PurpleTheme: Story<ViewTogglerProps> = Template.bind({})
PurpleTheme.args = {}
PurpleTheme.decorators = [ThemeDecorator(AppThemes.PURPLE)]