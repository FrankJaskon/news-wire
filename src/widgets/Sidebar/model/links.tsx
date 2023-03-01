import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface Item {
	path: string
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	text: string
}

export const sidebarLinks = [
	{
		path: '/',
		text: 'sidebar.link.main',
		Icon: HomeIcon
	},
	{
		path: '/about',
		text: 'sidebar.link.about',
		Icon: AboutIcon
	},
	{
		path: '/profile',
		text: 'sidebar.link.profile',
		Icon: ProfileIcon
	},
] as const