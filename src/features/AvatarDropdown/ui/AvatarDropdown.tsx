import { FC } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { AvatarDropdown as AvatarDropdownDeprecated } from './deprecated/AvatarDropdown'
import { AvatarDropdown as AvatarDropdownRedesigned } from './redesigned/AvatarDropdown'

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = props => {
	const { className } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<AvatarDropdownRedesigned />}
			off={<AvatarDropdownDeprecated className={className} />}
		/>
	)
}
