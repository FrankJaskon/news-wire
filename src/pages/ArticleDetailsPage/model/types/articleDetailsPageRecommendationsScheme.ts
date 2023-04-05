import { EntityState } from '@reduxjs/toolkit'
import { ArticleType } from 'entities/Article'

export interface ArticleDetailsPageRecommendationsScheme extends EntityState<ArticleType>{
	isLoading: boolean
	error?: string
}