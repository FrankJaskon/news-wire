import { Listbox } from '@headlessui/react'
import { Fragment } from 'react'
import CheckMark from '@/shared/assets/icons/checkmark.svg'
import ExpandIcon from '@/shared/assets/icons/expand.svg'
import { typedMemo } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon, AppIconSize, AppIconVariant } from '@/shared/ui/deprecated/AppIcon'
import { HStack } from '@/shared/ui/redesigned/HStack'
import {
	AlignType,
	DirectionType,
	DirectionVariant,
	InnerPositionVariant,
} from '../../../styles/consts'
import popupCls from '../../../styles/Popups.module.scss'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
	value: T
	label: T
}

export interface SelectProps<T extends string> {
	className?: string
	name?: string
	options: SelectOption<T>[]
	value?: SelectOption<T>
	onChange?: (value: SelectOption<T>) => void
	direction?: DirectionType
	align?: AlignType
	readonly?: boolean
	placeholder?: string
	'data-testid'?: string
}

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
	const {
		className,
		options,
		value,
		onChange,
		name,
		readonly,
		placeholder,
		direction = 'bottom right',
		align = 'start',
		'data-testid': datTestId,
	} = props

	return (
		<div className={classNames(popupCls.Popup, {}, [className])}>
			<Listbox value={value || {}} onChange={onChange} name={name} disabled={readonly}>
				<Listbox.Button
					className={classNames(cls.button, {
						[popupCls.disabled]: readonly,
					})}
					data-testid={datTestId}
				>
					<HStack justify='between' align='center' gap='8'>
						{value?.label || placeholder}
						<AppIcon Svg={ExpandIcon} size={AppIconSize.SMALL} />
					</HStack>
				</Listbox.Button>
				<Listbox.Options
					className={classNames(cls.options, {}, [DirectionVariant[direction]])}
				>
					{options.map(item => (
						<Listbox.Option key={item.value} value={item} as={Fragment}>
							{({ active, selected }) => (
								<li
									className={classNames(
										cls.item,
										{
											[popupCls.active]: active,
										},
										[InnerPositionVariant[align]]
									)}
								>
									<HStack justify='between' align='center' gap='8'>
										{item.label}
										{selected && (
											<AppIcon
												variant={
													active
														? AppIconVariant.CONTRAST
														: AppIconVariant.PRIMARY
												}
												Svg={CheckMark}
												size={AppIconSize.SMALL}
											/>
										)}
									</HStack>
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	)
})
