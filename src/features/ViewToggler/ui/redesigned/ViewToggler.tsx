import { FloatingDelayGroup } from '@floating-ui/react'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TooltipDelay } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'
import cls from './ViewToggler.module.scss'

type VariantType = 'articleView' | 'editView'

export interface ViewTogglerProps<T extends string> {
	className?: string
	activeView?: T
	onToggle?: (view: T) => void
	isLoading?: boolean
	viewsList?: (ViewPropsWithIcon<T> | ViewPropsWithText<T>)[]
	variant?: VariantType
}

interface ViewProps<T> {
	view: T
	tooltip?: string
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
	const { className, activeView, onToggle, isLoading, viewsList, variant = 'articleView' } = props
	const { t } = useTranslation()

	const handleToggle = useCallback(
		(view: T) => () => {
			onToggle?.(view)
		},
		[onToggle]
	)

	const viewsComponent = useMemo(
		() =>
			viewsList?.map(
				view => (
					<AppTooltip tooltip={view.tooltip} key={view.view}>
						<AppButton
							className={classNames(cls.btn, {
								[cls.active]: activeView === view.view,
							})}
							variant='custom'
							onClick={handleToggle(view.view)}
							as='div'
							data-testid={`view-${view.view}`}
						>
							{variant == 'articleView' ? (
								<AppIcon
									className={cls.icon}
									Svg={
										view.content as React.FunctionComponent<
											React.SVGAttributes<SVGElement>
										>
									}
									width={32}
									height={32}
								/>
							) : (
								(view.content as string)
							)}
						</AppButton>
					</AppTooltip>
				),
				[onToggle]
			),
		[viewsList, onToggle, activeView, handleToggle, variant]
	)

	if (isLoading) {
		return <Skeleton height={53} width={103} border='43px' />
	}

	return (
		<FloatingDelayGroup delay={TooltipDelay}>
			<AppCard
				className={classNames(cls.ViewToggler, {}, [className])}
				padding='0'
				radius='bigger'
			>
				{viewsComponent}
			</AppCard>
		</FloatingDelayGroup>
	)
}
