import { FC, memo, useCallback, useState } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import {
	ArticleInfiniteList,
	articlesInfiniteListReducer,
	fetchNextArticlesPage,
	useArticleInfiniteListError,
} from '@/widgets/ArticleInfiniteList'
import { PageWrapper } from '@/widgets/PageWrapper'

const reducers: ReducerList = {
	articlesInfiniteList: articlesInfiniteListReducer,
}

export const ArticlesPage: FC = memo(() => {
	const dispatch = useAppDispatch()
	const error = useArticleInfiniteListError()
	const [isReducerMounted, setIsReducerMounted] = useState<boolean>(false)

	const onLoadNextPart = useCallback(() => {
		if (!error) {
			dispatch(fetchNextArticlesPage())
		}
	}, [dispatch, error])

	return (
		<LazyReducerLoader reducers={reducers} setIsReducerMounted={setIsReducerMounted}>
			<PageWrapper onScrollEnd={onLoadNextPart} data-testid='articles-page'>
				<ArticleInfiniteList isReducerMounted={isReducerMounted} />
			</PageWrapper>
		</LazyReducerLoader>
	)
})
