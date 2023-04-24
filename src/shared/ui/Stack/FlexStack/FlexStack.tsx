import { DetailedHTMLProps, FC, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
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
type GapType = '4' |'8' | '12' | '16' | '24' | '32'
type InnerWidthType = 'full' |'evenly'

const GapMapper: Record<GapType, string> = {
	'4': 'gap4',
	'8': 'gap8',
	'12': 'gap12',
	'16': 'gap16',
	'24': 'gap24',
	'32': 'gap32',
}

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
		gap && cls[GapMapper[gap]],
		innerWidth && cls[innerWidth]
	]

	return <div className={classNames(cls.FlexStack, mods, extra)}>
		{children}
	</div>
}