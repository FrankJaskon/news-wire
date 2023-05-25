import { FC, memo, useCallback } from 'react'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard, CardVariant } from '../../deprecated/AppCard'
import { Text } from '../Text'
import { TabVariant, TabVariantType } from './model/consts'
import cls from './Tabs.module.scss'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export interface TabItem {
	value: string
	content: string
}

export interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string | string[]
	onTabClick: (tab: string) => void
	variant?: TabVariantType
	'data-testid'?: string
	light?: boolean
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
	const {
		className,
		tabs,
		value,
		onTabClick,
		variant = TabVariant.PRIMARY,
		'data-testid': dataTestId = 'tabs',
		light = false,
	} = props

	const handleClick = useCallback(
		(tab: string) => () => {
			onTabClick(tab)
		},
		[onTabClick]
	)

	const isActive = useCallback(
		(tab: TabItem) => {
			if (Array.isArray(value)) {
				return value.includes(tab.value)
			}
			return value === tab.value
		},
		[value]
	)

	return (
		<div className={classNames(cls.Tabs, {}, [className])} data-testid={dataTestId}>
			{tabs?.map(tab => (
				<AppCard
					key={tab.value}
					variant={light ? CardVariant.LIGHT : CardVariant.SHEET}
					onClick={handleClick(tab.value)}
					className={classNames(cls.tab, {}, [
						(isActive(tab) && cls.active) || undefined,
						cls[variant],
					])}
					data-testid={`${dataTestId}-${tab.value}`}
				>
					<Text
						content={tab.content}
						contentHue={isActive(tab) ? TextColor.LIGHT : undefined}
					/>
				</AppCard>
			))}
		</div>
	)
})
