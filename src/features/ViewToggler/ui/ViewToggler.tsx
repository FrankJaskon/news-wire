import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ViewToggler as ViewTogglerDeprecated } from './deprecated/ViewToggler'
import { ViewToggler as ViewTogglerRedesigned } from './redesigned/ViewToggler'

type ViewType = 'grid' | 'list'

export interface ViewTogglerProps {
	className?: string
	activeView?: ViewType
	onToggle?: (view: ViewType) => void
	isLoading?: boolean
}

export const ViewToggler: FC<ViewTogglerProps> = memo((props: ViewTogglerProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ViewTogglerRedesigned {...props} />}
			off={<ViewTogglerDeprecated {...props} />}
		/>
	)
})
