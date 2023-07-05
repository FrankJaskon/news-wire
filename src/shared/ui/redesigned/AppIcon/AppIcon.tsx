import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppIcon.module.scss'

type svgProps = Omit<React.SVGAttributes<SVGElement>, 'onClick'>

type BtnAsType = 'button' | 'div'

export interface AppIconBaseProps extends svgProps {
	className?: string
	Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	'data-testid'?: string
	btnType?: 'button' | 'submit' | 'reset'
	btnAs?: BtnAsType
	withFocus?: boolean
}

export interface NonClickableAppIconProps extends AppIconBaseProps {
	clickable?: false
}

export interface ClickableAppIconProps extends AppIconBaseProps {
	clickable: true
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
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
		btnType = 'button',
		btnAs = 'button',
		withFocus = true,
		...otherProps
	} = props

	const icon = (
		<Svg
			className={classNames(cls.AppIcon, {}, [className && clickable ? '' : className])}
			data-testid={clickable ? dataTestId : undefined}
			height={height}
			width={width}
			{...otherProps}
			onClick={undefined}
		/>
	)

	if (clickable) {
		if (btnAs === 'div') {
			return (
				<div
					data-testid={dataTestId}
					onClick={props.onClick}
					onMouseEnter={props?.onMouseEnter}
					onMouseLeave={props?.onMouseLeave}
					className={classNames(cls.button, {}, [className])}
					style={{ height, width }}
				>
					{icon}
				</div>
			)
		}
		return (
			<button
				data-testid={dataTestId}
				onClick={props.onClick}
				onMouseEnter={props?.onMouseEnter}
				onMouseLeave={props?.onMouseLeave}
				type={btnType ?? 'button'}
				className={classNames(cls.button, { [cls.withFocus]: withFocus }, [className])}
				style={{ height, width }}
			>
				{icon}
			</button>
		)
	}

	return icon
})
