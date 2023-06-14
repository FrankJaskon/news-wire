import { FC, memo } from 'react'
import { ViewPropsWithIcon, ViewToggler } from '@/features/ViewToggler'
import ListIcon from '@/shared/assets/icons/burger.svg'
import GridIcon from '@/shared/assets/icons/tile.svg'
import { useArticlesFilters, useUpdateLimitOnChangeView } from '../../hooks/useArticlesFilters'

interface ArticleViewTogglerContainerProps {
	isLoading?: boolean
}

const views: ViewPropsWithIcon[] = [
	{
		view: 'list',
		content: ListIcon,
	},
	{
		view: 'grid',
		content: GridIcon,
	},
]

export const ArticleViewTogglerContainer: FC<ArticleViewTogglerContainerProps> = memo(
	(props: ArticleViewTogglerContainerProps) => {
		const { isLoading } = props
		const { view, changeView } = useArticlesFilters()
		useUpdateLimitOnChangeView()

		return (
			<ViewToggler
				activeView={view}
				onToggle={changeView}
				isLoading={isLoading}
				viewsList={views}
			/>
		)
	}
)
