import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import popupCls from '../styles/popup.module.scss'
import cls from './Dropdown.module.scss'
import { DropdownItem } from './DropdownItem/DropdownItem'
import { NestedDropdownItem, NestedItem } from './NestedDropdownItem/NestedDropdownItem'

interface DropdownProps {
	className?: string
	items?: (DropdownItem | NestedItem)[][]
	direction?: DropdownDirection
	trigger: ReactNode
}

export function Dropdown(props: DropdownProps) {
	const { className, trigger, items } = props

	const extra = [popupCls.menu]

	return (
		<Menu as='div' className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
			<Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, extra)}>
				{items?.map((optionGroup, index, array) => (
					<Fragment key={`option-${index}`}>
						{optionGroup?.map?.((item, index) => {
							if (item?.trigger) {
								return (
									<NestedDropdownItem
										key={`${item.trigger.content}${index}`}
										itemClass={cls.item}
										activeClass={popupCls.active}
										disabledClass={cls.disabled}
										nestedItem={item}
									/>
								)
							}
							return (
								<DropdownItem
									key={`dropdown-key-${index}`}
									item={item}
									activeClass={popupCls.active}
									itemClass={cls.item}
									disabledClass={cls.disabled}
								/>
							)
						})}
						{index !== array.length - 1 && <div className={cls.divider} />}
					</Fragment>
				))}
				<div className={cls.divider} />
			</Menu.Items>
		</Menu>
	)
}
