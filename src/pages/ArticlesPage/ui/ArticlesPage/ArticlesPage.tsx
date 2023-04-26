import { FC, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { LazyReducerLoader, ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/Stack'
import {
	ArticleInfiniteList,
	articlesInfiniteListReducer,
	fetchNextArticlesPage,
	getError
} from '@/widgets/ArticleInfiniteList'
import { PageWrapper } from '@/widgets/PageWrapper'

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