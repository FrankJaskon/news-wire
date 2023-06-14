import { ToggleFeatures } from '@/shared/lib/features'
import { ViewToggler as ViewTogglerDeprecated } from './deprecated/ViewToggler'
import { ViewToggler as ViewTogglerRedesigned } from './redesigned/ViewToggler'

type VariantType = 'articleView' | 'editView'

export interface ViewTogglerProps<T extends string> {
	className?: string
	activeView?: T
	onToggle?: (view: T) => void
	isLoading?: boolean
	viewsList?: (ViewPropsWithIcon<T> | ViewPropsWithText<T>)[]
	variant?: VariantType
}

interface ViewProps<T> {
	view: T
}

export interface ViewPropsWithIcon<T extends string> extends ViewProps<T> {
	content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export interface ViewPropsWithText<T extends string> extends ViewProps<T> {
	content: string
}

export const ViewToggler: <T extends string>(props: ViewTogglerProps<T>) => JSX.Element = <
	T extends string
>(
	props: ViewTogglerProps<T>
) => {
	const { viewsList, variant, ...otherProps } = props
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ViewTogglerRedesigned {...otherProps} viewsList={viewsList} variant={variant} />}
			off={<ViewTogglerDeprecated {...otherProps} />}
		/>
	)
}
