import { useCallback, useMemo } from 'react'
import GridIcon from '@/shared/assets/icons/grid.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonVariant } from '@/shared/ui/deprecated/AppButton'
import { AppIcon } from '@/shared/ui/deprecated/AppIcon'
import cls from './ViewToggler.module.scss'

type ViewType = 'grid' | 'list'

const views: ViewPropsWithIcon<ViewType>[] = [
	{
		view: 'grid',
		content: GridIcon,
	},
	{
		view: 'list',
		content: ListIcon,
	},
]

export interface ViewTogglerProps<T extends string> {
	className?: string
	activeView?: T
	onToggle?: (view: T) => void
	isLoading?: boolean
}

interface ViewProps<T> {
	view: T
}

export interface ViewPropsWithIcon<T extends string> extends ViewProps<T> {
	content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export interface ViewPropsWithText<T extends string> extends ViewProps<T> {
	content: string
}

export const ViewToggler: <T extends string>(props: ViewTogglerProps<T>) => JSX.Element = <
	T extends string
>(
	props: ViewTogglerProps<T>
) => {
	const { className, activeView, onToggle } = props

	const handleToggle = useCallback(
		(view: ViewType) => () => {
			onToggle?.(view as T)
		},
		[onToggle]
	)

	const viewsComponent = useMemo(
		() =>
			views.map(
				({ view, content }) => (
					<AppButton
						className={classNames(cls.btn, {
							[cls.active]: activeView === view,
						})}
						variant={ButtonVariant.CUSTOM}
						onClick={handleToggle(view)}
						key={view}
						data-testid={`view-${view === 'grid' ? 'grid' : 'list'}`}
					>
						<AppIcon className={cls.icon} Svg={content} />
					</AppButton>
				),
				[onToggle]
			),
		[onToggle, activeView, handleToggle]
	)

	return <div className={classNames(cls.ViewToggler, {}, [className])}>{viewsComponent}</div>
}
