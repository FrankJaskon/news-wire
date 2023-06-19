import { Menu } from '@headlessui/react'
import { FC, Fragment, ReactNode, memo } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from '@/shared/lib/classNames/classNames'
import {
	AlignType,
	DirectionType,
	DirectionVariant,
	InnerPositionVariant,
} from '../../styles/consts'
import popupCls from '../../styles/Popups.module.scss'
import cls from './Dropdown.module.scss'

export interface DropdownItem {
	disabled?: boolean
	component?: ReactNode
	onClick?: () => void
	href?: string
}

export interface DropdownProps {
	className?: string
	trigger: ReactNode
	items?: DropdownItem[][]
	direction?: DirectionType
	align?: AlignType
}

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const Dropdown: FC<DropdownProps> = memo((props: DropdownProps) => {
	const { className, trigger, items, direction = 'bottom right', align = 'start' } = props
	return (
		<Menu as='div' className={classNames(cls.Dropdown, {}, [popupCls.Popup])}>
			<Menu.Button className={className}>{trigger}</Menu.Button>
			<Menu.Items
				as='div'
				className={classNames(cls.items, {}, [DirectionVariant[direction]])}
			>
				{items?.map((optionGroup, index, array) => (
					<Fragment key={`option-${index}`}>
						{optionGroup?.map((item, index) => {
							const content = ({ active }: { active: boolean }) => (
								<button
									type='button'
									disabled={item.disabled}
									onClick={item.onClick}
									className={classNames(
										cls.item,
										{
											[popupCls.active]: active,
											[popupCls.disabled]: item.disabled,
										},
										[InnerPositionVariant[align]]
									)}
								>
									{item.component}
								</button>
							)

							if (item.href) {
								return (
									<Menu.Item
										key={index}
										as={NavLink}
										to={item.href}
										disabled={item.disabled}
									>
										{content}
									</Menu.Item>
								)
							}

							return (
								<Menu.Item key={index} as={Fragment} disabled={item.disabled}>
									{content}
								</Menu.Item>
							)
						})}
						{index !== array.length - 1 && <div className={cls.divider} />}
					</Fragment>
				))}
			</Menu.Items>
		</Menu>
	)
})
