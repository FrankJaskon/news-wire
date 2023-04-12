import { FC, Fragment, memo } from 'react'
import { Listbox } from '@headlessui/react'
import ExpandIcon from 'shared/assets/icons/expand.svg'
import CheckMark from 'shared/assets/icons/checkmark.svg'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { AppIcon, AppIconSize, AppIconVariant } from 'shared/ui/AppIcon'
import { HStack } from 'shared/ui/Stack'

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
	} = props

	return <div className={classNames(cls.Select, {}, [className])}>
		<Listbox
			value={value || {}}
			onChange={onChange}
			name={name}
			disabled={readonly}
		>
			<Listbox.Button
				className={classNames(cls.button, {
					[cls.disabled]: readonly
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
				className={cls.options}
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
								[cls.active]: active,
							},
							[])
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