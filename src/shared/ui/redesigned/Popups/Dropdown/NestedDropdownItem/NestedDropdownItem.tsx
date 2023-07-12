import { FC, Fragment, MouseEvent, memo, useCallback, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { DropdownItem, DropdownItemType } from '../DropdownItem/DropdownItem'
import cls from './NestedDropdownItem.module.scss'

export interface NestedDropdownItemProps {
	itemClass: string
	activeClass: string
	disabledClass: string
	nestedItem: NestedItem
}

export interface NestedItem {
	trigger: DropdownItemType
	options: (DropdownItemType | NestedItem)[]
}

export const NestedDropdownItem: FC<NestedDropdownItemProps> = memo(
	(props: NestedDropdownItemProps) => {
		const { itemClass, activeClass, disabledClass, nestedItem } = props
		const [visible, setVisible] = useState(false)

		const handleTriggerOpen = useCallback((e?: MouseEvent) => {
			e?.preventDefault()
			setVisible(prev => !prev)
		}, [])

		const handleOptionClick = useCallback(
			(callback?: () => void) => () => {
				setVisible(false)
				callback?.()
			},
			[]
		)

		return (
			<Fragment>
				{nestedItem.trigger && (
					<DropdownItem
						item={{ ...nestedItem.trigger, onClick: handleTriggerOpen }}
						activeClass={activeClass}
						itemClass={itemClass}
						disabledClass={disabledClass}
					/>
				)}
				{visible && (
					<Fragment>
						{nestedItem.options.map((item, index) => {
							if ('trigger' in item) {
								return (
									<NestedDropdownItem
										key={`nested-dropdown-item${index}`}
										itemClass={itemClass}
										activeClass={activeClass}
										disabledClass={disabledClass}
										nestedItem={item}
									/>
								)
							}
							return (
								<DropdownItem
									key={`nested-dropdown-item${index}`}
									item={{
										...item,
										onClick: handleOptionClick(item.onClick),
									}}
									activeClass={activeClass}
									itemClass={classNames(cls.item, {}, [itemClass]) ?? itemClass}
									disabledClass={disabledClass}
								/>
							)
						})}
					</Fragment>
				)}
			</Fragment>
		)
	}
)
