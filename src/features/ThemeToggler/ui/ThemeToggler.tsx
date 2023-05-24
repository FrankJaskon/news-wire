import { FC, memo, useCallback } from 'react'
import { saveJsonSettings, useUserAuthData } from '@/entities/User'
import LightIcon from '@/shared/assets/icons/light-theme.svg'
import useTheme from '@/shared/config/theme/useTheme'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/deprecated/AppButton'
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
			<LightIcon className={cls.svg} width={32} height={32} />
		</AppButton>
	)
})
