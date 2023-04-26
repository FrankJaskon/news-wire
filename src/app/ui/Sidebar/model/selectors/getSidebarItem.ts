import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { RoutePaths } from '@/shared/const/RoutPaths'
import { SidebarItemType } from '../types/sidebarTypes'

export const getSidebarItem = createSelector(
	getUserAuthData,
	(authData) => {
		const sidebarLinks: SidebarItemType[] = [
			{
				path: RoutePaths.main,
				text: 'sidebar.link.main',
				Icon: HomeIcon
			},
			{
				path: RoutePaths.about,
				text: 'sidebar.link.about',
				Icon: AboutIcon
			}
		]
		if (authData) {
			sidebarLinks.push({
				path: `${RoutePaths.profiles}${authData?.id ?? 0}`,
				text: 'sidebar.link.profile',
				Icon: ProfileIcon,
				authOnly: true
			},
			{
				path: RoutePaths.articles,
				text: 'sidebar.link.articles',
				Icon: ArticlesIcon,
				authOnly: true
			})
		}

		return sidebarLinks
	}
)