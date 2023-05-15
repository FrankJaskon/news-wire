import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {
	getAboutRoute,
	getArticlesRoute,
	getMainRoute,
	getProfileRoute,
} from '@/shared/const/RoutPaths'
import { SidebarItemType } from '../types/sidebarTypes'

export const getSidebarItem = createSelector(getUserAuthData, authData => {
	const sidebarLinks: SidebarItemType[] = [
		{
			path: getMainRoute(),
			text: 'sidebar.link.main',
			Icon: HomeIcon,
		},
		{
			path: getAboutRoute(),
			text: 'sidebar.link.about',
			Icon: AboutIcon,
		},
	]
	if (authData) {
		sidebarLinks.push(
			{
				path: getProfileRoute(authData?.id),
				text: 'sidebar.link.profile',
				Icon: ProfileIcon,
				authOnly: true,
			},
			{
				path: getArticlesRoute(),
				text: 'sidebar.link.articles',
				Icon: ArticlesIcon,
				authOnly: true,
			}
		)
	}

	return sidebarLinks
})
