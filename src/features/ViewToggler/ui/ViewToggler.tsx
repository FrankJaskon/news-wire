import { FC, useCallback, useMemo } from 'react'
import GridIcon from '@/shared/assets/icons/grid.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonVariant } from '@/shared/ui/AppButton'
import { AppIcon } from '@/shared/ui/AppIcon'
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
		view: 'grid',
		Icon: GridIcon
	},
	{
		view: 'list',
		Icon: ListIcon
	}
]

export const ViewToggler: FC<ViewTogglerProps> = (props) => {
	const {
		className,
		activeView,
		onToggle
	} = props

	const handleToggle = useCallback((view: ViewType) => () => {
		onToggle?.(view)
	}, [onToggle])

	const viewsComponent = useMemo(() => views.map(({ view, Icon }) => (
		<AppButton
			className={classNames(cls.btn, { [cls.active]: activeView === view })}
			variant={ButtonVariant.CUSTOM}
			onClick={handleToggle(view)}
			key={view}
			data-testid={`view-${view === 'grid' ? 'grid' : 'list'}`}
		>
			<AppIcon
				className={cls.icon}
				Svg={Icon}
			/>
		</AppButton>), [onToggle]
	), [onToggle, activeView, handleToggle])

	return (
		<div className={classNames(cls.ViewToggler, {}, [className])}>
			{viewsComponent}
		</div>
	)
}