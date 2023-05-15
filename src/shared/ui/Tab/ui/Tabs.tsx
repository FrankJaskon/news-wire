import { FC, memo, ReactNode, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '../../AppCard'
import { TabVariant, TabVariantType } from '../model/consts'
import cls from './Tabs.module.scss'

export interface TabItem {
	value: string
	content: ReactNode
}

export interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string
	onTabClick: (tab: string) => void
	variant?: TabVariantType
	'data-testid'?: string
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
	const {
		className,
		tabs,
		value,
		onTabClick,
		variant = TabVariant.PRIMARY,
		'data-testid': dataTestId = 'tabs',
	} = props

	const handleClick = useCallback(
		(tab: string) => () => {
			onTabClick(tab)
		},
		[onTabClick]
	)

	const isActive = useCallback(
		(tab: TabItem) => (value === tab.value ? cls.active : undefined),
		[value]
	)

	return (
		<div className={classNames(cls.Tabs, {}, [className])} data-testid={dataTestId}>
			{tabs?.map(tab => (
				<AppCard
					key={tab.value}
					onClick={handleClick(tab.value)}
					className={classNames(cls.tab, {}, [isActive(tab) && cls.active, cls[variant]])}
					data-testid={`${dataTestId}-${tab.value}`}
				>
					{tab.content}
				</AppCard>
			))}
		</div>
	)
})
