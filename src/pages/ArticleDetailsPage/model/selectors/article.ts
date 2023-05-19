import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsData } from '@/features/ArticleDetails'

export const getIfCanEdit = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(authData, articleData) =>
		authData?.id && articleData?.profile?.id && authData?.id === articleData?.profile.id
)
