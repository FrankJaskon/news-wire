import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecotator'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { sidebarLinks } from 'widgets/Sidebar/model/links'
import { SidebarLink } from './SidebarLink'
import type { SidebarLinkProps } from './SidebarLink'
import sidebarCls from '../Sidebar.module.scss'

export default {
	title: 'widgets/Sidebar/SidebarLink',
	component: SidebarLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		item: sidebarLinks[0]
	}
} as ComponentMeta<typeof SidebarLink>

const Template: ComponentStory<typeof SidebarLink> = (args) => <div className={sidebarCls.Sidebar}>
	<SidebarLink {...args} />
</div>

export const Basic: Story<SidebarLinkProps> = Template.bind({})
Basic.args = {
	collapsed: false
}

export const DarkTheme: Story<SidebarLinkProps> = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(appThemes.DARK)]