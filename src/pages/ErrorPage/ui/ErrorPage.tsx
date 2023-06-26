import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppButton as AppButtonDeprecated } from '@/shared/ui/deprecated/AppButton'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppText } from '@/shared/ui/redesigned/AppText'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
	className?: string
}

export const ErrorPage: FC<ErrorPageProps> = memo((props: ErrorPageProps) => {
	const { className } = props
	const { t } = useTranslation()

	const reloadPage = useCallback(() => {
		location.reload()
	}, [])

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<div
					className={classNames(cls.ErrorPage, {}, [
						className,
						cls.redesigned,
						'App-redesign',
						'errorBoundary',
					])}
				>
					<AppText text={t('error-page.something-went-wrong')} variant='error' />
					<AppButton onClick={reloadPage} variant='outline' className={cls.mt20}>
						{t('error-page.reload')}
					</AppButton>
				</div>
			}
			off={
				<div
					className={classNames(cls.ErrorPage, {}, [
						className,
						cls.deprecated,
						'errorBoundary',
					])}
				>
					<div>{t('error-page.something-went-wrong')}</div>
					<AppButtonDeprecated onClick={reloadPage} className={cls.mt20}>
						{t('error-page.reload')}
					</AppButtonDeprecated>
				</div>
			}
		/>
	)
})
