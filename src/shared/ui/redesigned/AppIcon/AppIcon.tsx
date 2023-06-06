import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppIcon.module.scss'

type svgProps = Omit<React.SVGAttributes<SVGElement>, 'onClick'>

export interface AppIconBaseProps extends svgProps {
	className?: string
	Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	'data-testid'?: string
}

export interface NonClickableAppIconProps extends AppIconBaseProps {
	clickable?: false
}

export interface ClickableAppIconProps extends AppIconBaseProps {
	clickable: true
	onClick: () => void
}

type AppIconProps = NonClickableAppIconProps | ClickableAppIconProps

export const AppIcon: FC<AppIconProps> = memo((props: AppIconProps) => {
	const {
		className,
		Svg,
		'data-testid': dataTestId = 'app-icon',
		height = 32,
		width = 32,
		clickable,
		...otherProps
	} = props

	const icon = (
		<Svg
			className={classNames(cls.AppIcon, {}, [className])}
			data-testid={dataTestId}
			height={height}
			width={width}
			{...otherProps}
			onClick={undefined}
		/>
	)

	if (clickable) {
		return (
			<button
				onClick={props.onClick}
				type='button'
				className={classNames(cls.button)}
				style={{ height, width }}
			>
				{icon}
			</button>
		)
	}

	return icon
})
