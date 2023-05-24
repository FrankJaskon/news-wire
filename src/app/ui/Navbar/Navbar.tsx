import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated'
import { NavbarRedesign } from './NavbarRedesign/NavbarRedesign'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
	const { className } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<NavbarRedesign className={className} />}
			off={<NavbarDeprecated className={className} />}
		/>
	)
})
