import { FC, memo } from 'react'
import AppSvg from '@/shared/assets/icons/app-image.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { HStack } from '../HStack'
import cls from './AppLogo.module.scss'

export interface AppLogoProps {
	className?: string
}

export const AppLogo: FC<AppLogoProps> = memo(({ className }: AppLogoProps) => {
	return (
		<HStack justify='center' className={classNames(cls.appLogoWrapper, {}, [className])}>
			<div className={cls.gradientSmall} />
			<div className={cls.gradientBig} />
			<AppSvg className={cls.appLogo} width={55} height={60} />
		</HStack>
	)
})
