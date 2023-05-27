import { FC, memo } from 'react'
import { ViewToggler } from '@/features/ViewToggler'
import { useArticlesFilters, useUpdateLimitOnChangeView } from '../../hooks/useArticlesFilters'

export const ArticleViewTogglerContainer: FC = memo(() => {
	const { view, changeView } = useArticlesFilters()
	useUpdateLimitOnChangeView()

	return <ViewToggler activeView={view} onToggle={changeView} />
})
