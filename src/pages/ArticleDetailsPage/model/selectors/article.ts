import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'

export const getIfCanEdit = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(authData, articleData) => authData?.id === articleData?.user.id
)