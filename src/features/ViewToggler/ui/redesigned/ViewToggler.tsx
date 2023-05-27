import { FC, useCallback, useMemo } from 'react'
import ListIcon from '@/shared/assets/icons/burger.svg'
import GridIcon from '@/shared/assets/icons/tile.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import cls from './ViewToggler.module.scss'

type ViewType = 'grid' | 'list'

export interface ViewTogglerProps {
	className?: string
	activeView?: ViewType
	onToggle?: (view: ViewType) => void
}

interface ViewProps {
	view: ViewType
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const views: ViewProps[] = [
	{
		view: 'list',
		Icon: ListIcon,
	},
	{
		view: 'grid',
		Icon: GridIcon,
	},
]

export const ViewToggler: FC<ViewTogglerProps> = props => {
	const { className, activeView, onToggle } = props

	const handleToggle = useCallback(
		(view: ViewType) => () => {
			onToggle?.(view)
		},
		[onToggle]
	)

	const viewsComponent = useMemo(
		() =>
			views.map(
				({ view, Icon }) => (
					<AppButton
						className={classNames(cls.btn, {
							[cls.active]: activeView === view,
						})}
						variant='custom'
						onClick={handleToggle(view)}
						key={view}
						data-testid={`view-${view === 'grid' ? 'grid' : 'list'}`}
					>
						<AppIcon className={cls.icon} Svg={Icon} width={32} height={32} />
					</AppButton>
				),
				[onToggle]
			),
		[onToggle, activeView, handleToggle]
	)

	return (
		<AppCard
			className={classNames(cls.ViewToggler, {}, [className])}
			padding='0'
			radius='bigger'
		>
			{viewsComponent}
		</AppCard>
	)
}
