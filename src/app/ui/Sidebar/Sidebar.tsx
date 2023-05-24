import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated'
import { SidebarRedesign } from './SidebarRedesign/SidebarRedesign'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
	const { className } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<SidebarRedesign className={className} />}
			off={<SidebarDeprecated className={className} />}
		/>
	)
})
