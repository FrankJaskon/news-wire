import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
	className?: string
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}

	return <div className={classNames(cls.ErrorPage, {}, [className])}>
		<div>{t('error-page.something-went-wrong')}</div>
		<AppButton
			onClick={reloadPage}
			className={cls.mt20}>
			{t('error-page.reload')}
		</AppButton>
	</div>
}