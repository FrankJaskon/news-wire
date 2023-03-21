import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { routePaths } from 'shared/config/routePaths/routPaths'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import { SidebarItemType } from '../types/sidebarTypes'



export const getSidebarItem = createSelector(
	getUserAuthData,
	(authData) => {
		const sidebarLinks: SidebarItemType[] = [
			{
				path: routePaths.main,
				text: 'sidebar.link.main',
				Icon: HomeIcon
			},
			{
				path: routePaths.about,
				text: 'sidebar.link.about',
				Icon: AboutIcon
			}
		]

		if (authData) {
			sidebarLinks.push({
				path: routePaths.profile + authData?.id,
				text: 'sidebar.link.profile',
				Icon: ProfileIcon,
				authOnly: true
			},
			{
				path: routePaths.articles,
				text: 'sidebar.link.articles',
				Icon: ArticlesIcon,
				authOnly: true
			})
		}

		return sidebarLinks
	}
)