import { EntityState } from '@reduxjs/toolkit'
import { ArticleType } from 'entities/Article'

export interface ArticleDetailsPageRecommendationsScheme extends EntityState<ArticleType>{
	error?: string
	isLoading: boolean
}