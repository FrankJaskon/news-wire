import { FC, memo, useCallback } from 'react'
import { saveJsonSettings, useUserAuthData } from '@/entities/User'
import DarkIcon from '@/shared/assets/icons/dark-theme.svg'
import LightIcon from '@/shared/assets/icons/light-theme.svg'
import { AppThemes } from '@/shared/config/theme/ThemeContext'
import useTheme from '@/shared/config/theme/useTheme'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/AppButton'
import cls from './ThemeToggler.module.scss'

interface ThemeTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = memo((props: ThemeTogglerProps) => {
	const { className, ...otherProps } = props
	const { theme, toggleTheme } = useTheme()
	const userData = useUserAuthData()
	const dispatch = useAppDispatch()

	const onToggleTheme = useCallback(() => {
		toggleTheme(theme => {
			if (!userData) return
			dispatch(saveJsonSettings({ theme }))
		})
	}, [dispatch, toggleTheme, userData])

	return (
		<AppButton
			variant='custom'
			onClick={onToggleTheme}
			className={classNames(cls.ThemeToggler, {}, [className])}
			{...otherProps}
		>
			{theme === AppThemes.DARK ? (
				<DarkIcon className={cls.svg} />
			) : (
				<LightIcon className={cls.svg} />
			)}
		</AppButton>
	)
})
