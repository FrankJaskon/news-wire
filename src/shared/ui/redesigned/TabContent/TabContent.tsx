import { FC, ReactNode, memo, useCallback, useEffect, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '../AppButton'
import { AppCard } from '../AppCard'
import { HStack } from '../HStack'
import { VStack } from '../VStack'
import cls from './TabContent.module.scss'

interface TabContent {
	title: string
	content: ReactNode
	visible?: boolean
}

export interface TabContentProps {
	className?: string
	items: TabContent[]
	initialTabIndex?: number
}

export const TabContent: FC<TabContentProps> = memo((props: TabContentProps) => {
	const { className, items, initialTabIndex } = props
	const [activeTab, setActiveTab] = useState(0)

	console.log(items)

	const selectTab = useCallback(
		(index: number) => () => {
			setActiveTab(index)
		},
		[]
	)

	useEffect(() => {
		initialTabIndex && selectTab(initialTabIndex)
	}, [selectTab, initialTabIndex])

	if (!items) {
		return null
	}

	return (
		<AppCard padding='0' className={classNames(cls.TabContent, {}, [className])}>
			<VStack gap='24'>
				<HStack className={cls.header} justify='evenly'>
					{items.map(
						(item, index) =>
							item?.visible && (
								<AppButton
									key={item.title}
									onClick={selectTab(index)}
									variant='custom'
									className={classNames(cls.title, {
										[cls.active]: activeTab === index,
										[cls.noActive]: activeTab !== index,
									})}
								>
									{item.title}
								</AppButton>
							)
					)}
				</HStack>
				<div className={cls.contentWrapper}>{items[activeTab].content}</div>
			</VStack>
		</AppCard>
	)
})
