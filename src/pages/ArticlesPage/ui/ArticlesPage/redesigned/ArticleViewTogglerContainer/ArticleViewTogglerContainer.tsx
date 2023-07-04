import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ViewVariantType } from '@/entities/Article'
import { ViewPropsWithIcon, ViewToggler } from '@/features/ViewToggler'
import ListIcon from '@/shared/assets/icons/burger.svg'
import GridIcon from '@/shared/assets/icons/tile.svg'
import { useArticlesFilters } from '../../hooks/useArticlesFilters'

interface ArticleViewTogglerContainerProps {
	isLoading?: boolean
}

export const ArticleViewTogglerContainer: FC<ArticleViewTogglerContainerProps> = memo(
	(props: ArticleViewTogglerContainerProps) => {
		const { isLoading } = props
		const { view, changeView } = useArticlesFilters()
		const { t } = useTranslation()

		const views: ViewPropsWithIcon<ViewVariantType>[] = useMemo(
			() => [
				{
					view: 'list',
					content: ListIcon,
					tooltip: t('tooltips.view-toggler.list'),
				},
				{
					view: 'grid',
					content: GridIcon,
					tooltip: t('tooltips.view-toggler.grid'),
				},
			],
			[t]
		)

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
