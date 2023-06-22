import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsData } from '@/features/ArticleDetails'

export const getIfCanEditArticle = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(authData, articleData) =>
		Boolean(
			authData?.id && articleData?.profile?.id && authData?.id === articleData?.profile.id
		)
)
