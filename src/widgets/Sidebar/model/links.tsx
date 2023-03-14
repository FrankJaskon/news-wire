import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import { routePaths } from 'shared/config/routePaths/routPaths'

export interface Item {
	path: string
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	text: string
	authOnly?: boolean
}

export const sidebarLinks = [
	{
		path: routePaths.main,
		text: 'sidebar.link.main',
		Icon: HomeIcon
	},
	{
		path: routePaths.about,
		text: 'sidebar.link.about',
		Icon: AboutIcon
	},
	{
		path: routePaths.profile,
		text: 'sidebar.link.profile',
		Icon: ProfileIcon,
		authOnly: true
	},
	{
		path: routePaths.articles,
		text: 'sidebar.link.articles',
		Icon: ArticlesIcon,
		authOnly: true
	},
] as const