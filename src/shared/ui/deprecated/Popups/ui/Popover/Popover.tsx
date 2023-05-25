import { Popover as HeadlessPopover } from '@headlessui/react'
import { FC, ReactNode, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { DirectionType, DirectionVariant } from '../../styles/consts'
import popupCls from '../../styles/Popups.module.scss'
import cls from './Popover.module.scss'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export interface PopoverProps {
	className?: string
	children: ReactNode
	trigger: ReactNode
	direction?: DirectionType
	unmount?: boolean
}

export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
	const { className, trigger, direction = 'bottom right', children, unmount = true } = props

	return (
		<HeadlessPopover as='div' className={popupCls.Popup}>
			<HeadlessPopover.Button className={className}>{trigger}</HeadlessPopover.Button>

			<HeadlessPopover.Panel
				unmount={unmount}
				className={classNames(cls.items, {}, [DirectionVariant[direction]])}
			>
				{children}
			</HeadlessPopover.Panel>
		</HeadlessPopover>
	)
})
