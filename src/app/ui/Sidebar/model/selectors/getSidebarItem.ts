import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import AboutIconDeprecated from '@/shared/assets/icons/about.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import MainIcon from '@/shared/assets/icons/home-new.svg'
import HomeIconDeprecated from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'
import {
	getAboutRoute,
	getArticlesRoute,
	getMainRoute,
	getProfileRoute,
} from '@/shared/const/RoutPaths'
import { toggleFeatures } from '@/shared/lib/features'
import { SidebarItemType } from '../types/sidebarTypes'

export const getSidebarItem = createSelector(getUserAuthData, authData => {
	const sidebarLinks: SidebarItemType[] = [
		{
			path: getMainRoute(),
			text: 'sidebar.link.main',
			Icon: toggleFeatures({
				name: 'isAppRedesigned',
				on: () => MainIcon,
				off: () => HomeIconDeprecated,
			}),
		},
		{
			path: getAboutRoute(),
			text: 'sidebar.link.about',
			Icon: toggleFeatures({
				name: 'isAppRedesigned',
				on: () => AboutIcon,
				off: () => AboutIconDeprecated,
			}),
		},
	]
	if (authData) {
		sidebarLinks.push(
			{
				path: getProfileRoute(authData?.id),
				text: 'sidebar.link.profile',
				Icon: toggleFeatures({
					name: 'isAppRedesigned',
					on: () => ProfileIcon,
					off: () => ProfileIconDeprecated,
				}),
				authOnly: true,
			},
			{
				path: getArticlesRoute(),
				text: 'sidebar.link.articles',
				Icon: toggleFeatures({
					name: 'isAppRedesigned',
					on: () => ArticleIcon,
					off: () => ArticlesIconDeprecated,
				}),
				authOnly: true,
			}
		)
	}

	return sidebarLinks
})
