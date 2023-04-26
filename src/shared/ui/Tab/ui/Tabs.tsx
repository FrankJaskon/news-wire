import { FC, memo, ReactNode, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '../../AppCard'
import cls from './Tabs.module.scss'
import { TabVariant, TabVariantType } from '../model/consts'

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
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
	const {
		className,
		tabs,
		value,
		onTabClick,
		variant = TabVariant.PRIMARY
	} = props

	const handleClick = useCallback((tab: string) => () => {
		onTabClick(tab)
	}, [onTabClick])

	const isActive = useCallback((tab: TabItem) => (
		value === tab.value ? cls.active : undefined
	), [value])

	return <div className={classNames(cls.Tabs, {}, [className])}>
		{tabs?.map(tab => <AppCard
			key={tab.value}
			onClick={handleClick(tab.value)}
			className={classNames(cls.tab,
				{},
				[
					isActive(tab) && cls.active,
					cls[variant]
				])}
		>
			{tab.content}
		</AppCard>)}
	</div>
})