import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ThemeToggler as ThemeTogglerDeprecated } from './deprecated/ThemeToggler'
import { ThemeToggler as ThemeTogglerRedesigned } from './redesigned/ThemeToggler'

interface ThemeTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = memo((props: ThemeTogglerProps) => {
	const { className, ...otherProps } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ThemeTogglerRedesigned className={className} {...otherProps} />}
			off={<ThemeTogglerDeprecated className={className} {...otherProps} />}
		/>
	)
})
