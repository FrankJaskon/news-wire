import { FC, memo, useCallback } from 'react'
import { ViewVariantType } from '@/entities/Article'
import { ViewToggler } from '@/features/ViewToggler'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useArticleInfiniteListView } from '../../model/selectors/articleInfiniteListSelector'
import { articlesInfiniteListActions } from '../../model/slice/articlesInfiniteListSlice'

export const ArticleViewTogglerContainer: FC = memo(() => {
	const dispatch = useAppDispatch()
	const view = useArticleInfiniteListView()

	const setFirstPage = useCallback(() => {
		dispatch(articlesInfiniteListActions.setPage(1))
	}, [dispatch])

	const changeView = useCallback(
		(value: ViewVariantType) => {
			if (view !== value) {
				dispatch(articlesInfiniteListActions.setView(value))
				setFirstPage()
			}
		},
		[dispatch, view, setFirstPage]
	)

	return <ViewToggler activeView={view} onToggle={changeView} />
})
