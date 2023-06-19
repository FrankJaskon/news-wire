import { Menu } from '@headlessui/react'
import { FC, Fragment, MouseEvent, ReactNode, memo } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from '@/shared/lib/classNames/classNames'

export interface DropdownItem {
	disabled?: boolean
	content?: ReactNode
	onClick?: (e?: MouseEvent) => void
	href?: string
}

export interface DropdownItemProps {
	item: DropdownItem
	itemClass: string
	disabledClass: string
	activeClass: string
}

export const DropdownItem: FC<DropdownItemProps> = memo((props: DropdownItemProps) => {
	const { item, itemClass, disabledClass, activeClass } = props

	const content = ({ active }: { active: boolean }) => (
		<button
			type='button'
			disabled={item.disabled}
			onClick={item.onClick}
			className={classNames(itemClass, {
				[activeClass]: active,
				[disabledClass]: item.disabled,
			})}
		>
			{item.content}
		</button>
	)

	if (item.href) {
		return (
			<Menu.Item
				as={NavLink}
				to={item.href}
				disabled={item.disabled}
				className={classNames('', { [disabledClass]: item.disabled })}
			>
				{content}
			</Menu.Item>
		)
	}

	return (
		<Menu.Item as={Fragment} disabled={item.disabled}>
			{content}
		</Menu.Item>
	)
})
