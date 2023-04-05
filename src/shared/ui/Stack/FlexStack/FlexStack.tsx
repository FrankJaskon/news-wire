import { DetailedHTMLProps, FC, ReactNode } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './FlexStack.module.scss'

export interface FlexStackProps extends DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>, HTMLDivElement
>{
	direction: DirectionType
	className?: string
	children?: ReactNode
	justify?: JustifyType
	align?: AlignType
	wrap?: WrapType
	gap?: GapType
	max?: boolean
	innerWidth?: InnerWidthType
}

type DirectionType = 'row' | 'column'
type JustifyType = 'start' | 'end' | 'center' | 'between' | 'evenly' | 'around'
type AlignType = 'start' | 'end' | 'center'
type WrapType = 'wrap' | 'nowrap'
type GapType = 'gap4' |'gap8' | 'gap12' | 'gap16' | 'gap24' | 'gap32'
type InnerWidthType = 'full' |'evenly'

export const FlexStack: FC<FlexStackProps> = (props) => {
	const {
		className,
		children,
		direction,
		justify,
		align,
		wrap,
		gap,
		max = true,
		innerWidth
	} = props

	const mods: Record<string, boolean> = {
		[cls.max]: max
	}

	const extra: (string | undefined)[] = [
		className,
		cls[direction],
		justify && cls[`justify-${justify}`],
		align && cls[`align-${align}`],
		wrap && cls[wrap],
		gap && cls[gap],
		innerWidth && cls[innerWidth]
	]

	return <div className={classNames(cls.FlexStack, mods, extra)}>
		{children}
	</div>
}