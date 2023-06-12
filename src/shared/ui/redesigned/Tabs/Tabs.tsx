import { memo, ReactNode, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '../AppCard'
import { Flex, FlexDirection } from '../Flex'
import cls from './Tabs.module.scss'

export interface TabItem {
	value: string
	content: ReactNode
}

interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string[]
	onTabClick: (tab: TabItem) => void
	direction?: FlexDirection
}

export const Tabs = memo((props: TabsProps) => {
	const { className, tabs, onTabClick, value, direction = 'row' } = props

	const clickHandle = useCallback(
		(tab: TabItem) => () => {
			onTabClick(tab)
		},
		[onTabClick]
	)

	return (
		<Flex
			direction={direction}
			gap='8'
			align='start'
			className={classNames(cls.Tabs, {}, [className])}
		>
			{tabs.map(tab => {
				const isSelected = value.includes(tab.value)
				return (
					<AppCard
						variant={isSelected ? 'light' : 'normal'}
						className={classNames(cls.tab, {
							[cls.selected]: isSelected,
						})}
						key={tab.value}
						onClick={clickHandle(tab)}
						radius='big'
					>
						{tab.content}
					</AppCard>
				)
			})}
		</Flex>
	)
})
