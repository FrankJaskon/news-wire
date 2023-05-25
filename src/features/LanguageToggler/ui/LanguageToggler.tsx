import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { LanguageToggler as LanguageTogglerDeprecated } from './deprecated/LanguageToggler'
import { LanguageToggler as LanguageTogglerRedesigned } from './redesigned/LanguageToggler'

interface LanguageTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	short?: boolean
}

export const LanguageToggler: FC<LanguageTogglerProps> = memo((props: LanguageTogglerProps) => {
	const { className, short, ...otherProps } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<LanguageTogglerRedesigned className={className} />}
			off={<LanguageTogglerDeprecated className={className} short={short} {...otherProps} />}
		/>
	)
})
