import { FC, memo } from 'react'
import { ViewToggler } from '@/features/ViewToggler'
import { useArticlesFilters, useUpdateLimitOnChangeView } from '../../hooks/useArticlesFilters'

interface ArticleViewTogglerContainerProps {
	isLoading?: boolean
}

export const ArticleViewTogglerContainer: FC<ArticleViewTogglerContainerProps> = memo(
	(props: ArticleViewTogglerContainerProps) => {
		const { isLoading } = props
		const { view, changeView } = useArticlesFilters()
		useUpdateLimitOnChangeView()

		return <ViewToggler activeView={view} onToggle={changeView} isLoading={isLoading} />
	}
)
