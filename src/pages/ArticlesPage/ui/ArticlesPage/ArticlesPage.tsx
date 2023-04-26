import { ArticleInfiniteList, articlesInfiniteListReducer } from '@/features/ArticleInfiniteList'
import { fetchNextArticlesPage } from '@/features/ArticleInfiniteList'
import { getError } from '@/features/ArticleInfiniteList'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { LazyReducerLoader, ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/Stack'
import { PageWrapper } from '@/widgets/PageWrapper'
import { FC, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

const reducers: ReducerList = {
	articlesInfiniteList: articlesInfiniteListReducer
}

const ArticlesPage: FC = () => {
	const dispatch = useAppDispatch()
	const error = useSelector(getError)
	const [isReducerMounted, setIsReducerMounted] = useState<boolean>(false)

	const onLoadNextPart = useCallback(() => {
		if (!error) {
			dispatch(fetchNextArticlesPage())
		}
	}, [dispatch, error])

	return <LazyReducerLoader
		reducers={reducers}
		removeAfterUnmount={false}
		setIsReducerMounted={setIsReducerMounted}
	>
		<PageWrapper
			onScrollEnd={onLoadNextPart}
			watchedScroll={true}
		>
			<VStack
				gap='16'
			>
				<ArticleInfiniteList
					isReducerMounted={isReducerMounted}
				/>
			</VStack>
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)