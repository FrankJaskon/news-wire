import { FC, memo } from 'react'
import AppSvg from '@/shared/assets/icons/app-image.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { HStack } from '../HStack'
import cls from './AppLogo.module.scss'

export interface AppLogoProps {
	className?: string
	size?: number
}

export const AppLogo: FC<AppLogoProps> = memo(({ className, size = 50 }: AppLogoProps) => {
	return (
		<HStack justify='center' className={classNames(cls.appLogoWrapper, {}, [className])}>
			<div className={cls.gradientBig} />
			<div className={cls.gradientSmall} />
			<AppSvg className={cls.appLogo} width={size} height={size} />
		</HStack>
	)
})
