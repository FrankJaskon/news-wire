import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { FC, Fragment, ReactNode, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'

export type DirectionType = 'top right' | 'top left' | 'bottom left' | 'bottom right'

export const DirectionVariant: Record<DirectionType, string> = {
	'top right': 'topRight',
	'top left': 'topLeft',
	'bottom left': 'bottomLeft',
	'bottom right': 'bottomRight'
}

export interface DropdownItem {
	disabled?: boolean
	component?: ReactNode
	onClick?: () => void
	href?: string
}

export interface DropdownProps {
	className?: string
	trigger: ReactNode
	items: DropdownItem[]
	direction?: DirectionType
	isRelativeWithin?: boolean
}

export const Dropdown: FC<DropdownProps> = memo((props: DropdownProps) => {
	const {
		className,
		trigger,
		items,
		direction = 'bottom right',
		isRelativeWithin = true
	} = props
	return (
		<Menu
			as='div'
			className={classNames(
				cls.Dropdown,
				{
					[cls.relative]: isRelativeWithin
				}
			)}
		>
			<Menu.Button
				className={className}
			>
				{trigger}
			</Menu.Button>
			<Menu.Items
				as='div'
				className={classNames(
					cls.items,
					{
						[cls.fullWith]: isRelativeWithin
					},
					[cls[DirectionVariant[direction]]]
				)}
			>
				{
					items.map((item, index) => {
						const content = ({ active }: { active: boolean }) => (
							<button
								type='button'
								disabled={item.disabled}
								onClick={item.onClick}
								className={classNames(cls.item, { [cls.active]: active })}
							>
								{item.component}
							</button>
						)

						if (item.href) {
							return <Menu.Item
								key={index}
								as='a'
								href={item.href}
								disabled={item.disabled}
							>
								{content}
							</Menu.Item>
						}

						return <Menu.Item
							key={index}
							as={Fragment}
							disabled={item.disabled}
						>
							{content}
						</Menu.Item>
					})
				}
			</Menu.Items>
		</Menu >
	)
})