import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { saveJsonSettings, useUserAuthData } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import useTheme from '@/shared/config/theme/useTheme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'
import cls from './ThemeToggler.module.scss'

interface ThemeTogglerProps {
	className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = memo((props: ThemeTogglerProps) => {
	const { className } = props
	const { toggleTheme } = useTheme()
	const userData = useUserAuthData()
	const dispatch = useAppDispatch()
	const { t } = useTranslation()

	const onToggleTheme = useCallback(() => {
		toggleTheme(theme => {
			if (userData) {
				dispatch(saveJsonSettings({ theme }))
			}
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
		})
	}, [dispatch, toggleTheme, userData])

	return (
		<AppTooltip tooltip={t('tooltips.sidebar.theme-toggler')} closeOnClick={false}>
			<AppIcon
				Svg={ThemeIcon}
				className={classNames(cls.svg, {}, [className])}
				btnAs='div'
				clickable
				onClick={onToggleTheme}
			/>
		</AppTooltip>
	)
})
