import { FC, Fragment, memo } from 'react'
import { Listbox } from '@headlessui/react'
import ExpandIcon from '@/shared/assets/icons/expand.svg'
import CheckMark from '@/shared/assets/icons/checkmark.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon, AppIconSize, AppIconVariant } from '@/shared/ui/AppIcon'
import { HStack } from '@/shared/ui/Stack'
import cls from './Select.module.scss'
import popupCls from '../../../styles/Popups.module.scss'
import { AlignType, DirectionType, DirectionVariant, InnerPositionVariant } from '../../../styles/consts'

export interface SelectOption {
	value: string
	label: string
}

export interface SelectProps {
	className?: string
	name?: string
	options: SelectOption[]
	value?: SelectOption
	onChange?: (value: SelectOption) => void
	direction?: DirectionType
	align?: AlignType
	readonly?: boolean
	placeholder?: string
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
	const {
		className,
		options,
		value,
		onChange,
		name,
		readonly,
		placeholder,
		direction = 'bottom right',
		align = 'start'
	} = props

	return <div className={classNames(
		popupCls.Popup,
		{},
		[className])}
	>
		<Listbox
			value={value || {}}
			onChange={onChange}
			name={name}
			disabled={readonly}
		>
			<Listbox.Button
				className={classNames(cls.button, {
					[popupCls.disabled]: readonly
				})}
			>
				<HStack
					justify='between'
					align='center'
					gap='8'
				>
					{value?.label || placeholder}
					<AppIcon
						Svg={ExpandIcon}
						size={AppIconSize.SMALL}
					/>
				</HStack>
			</Listbox.Button>
			<Listbox.Options
				className={classNames(
					cls.options,
					{},
					[DirectionVariant[direction]]
				)}
			>
				{options.map((item) => (
					<Listbox.Option
						key={item.value}
						value={item}
						as={Fragment}
					>
						{({ active, selected }) => <li className={classNames(
							cls.item,
							{
								[popupCls.active]: active,
							},
							[InnerPositionVariant[align]])
						}>
							<HStack
								justify='between'
								align='center'
								gap='8'
							>
								{item.label}
								{selected && <AppIcon
									variant={active ? AppIconVariant.CONTRAST : AppIconVariant.PRIMARY}
									Svg={CheckMark}
									size={AppIconSize.SMALL}
								/>}
							</HStack>
						</li>
						}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	</div>
})