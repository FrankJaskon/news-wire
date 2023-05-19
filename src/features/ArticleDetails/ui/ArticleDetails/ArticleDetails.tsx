import { FC } from 'react'
import { Article } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import {
	useArticleDetailsData,
	useArticleDetailsError,
	useArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelectors'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

export interface ArticleDetailsProps {
	className?: string
	id?: number
}

const reducers: ReducerList = {
	articleDetails: articleDetailsReducer,
} as const

export const ArticleDetails: FC<ArticleDetailsProps> = props => {
	const { className, id } = props

	const dispatch = useAppDispatch()
	const article = useArticleDetailsData()
	const isLoading = useArticleDetailsIsLoading()
	const error = useArticleDetailsError()

	useInitialEffect(() => dispatch(fetchArticleById(Number(id))))

	return (
		<LazyReducerLoader removeAfterUnmount reducers={reducers}>
			<Article article={article} isLoading={isLoading} error={error} className={className} />
		</LazyReducerLoader>
	)
}
