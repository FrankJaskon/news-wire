import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import ProfilePage from './ProfilePage'

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Basic: Story = Template.bind({})

export const DarkTheme: Story = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]

export const PurpleTheme: Story = Template.bind({})
PurpleTheme.decorators = [ThemeDecorator(appThemes.PURPLE)]