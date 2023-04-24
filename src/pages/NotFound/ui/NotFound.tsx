import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { PageWrapper } from '@/widgets/PageWrapper'
import cls from './NotFound.module.scss'
import { Text, TextSize, TextVariant } from '@/shared/ui/Text'

interface NotFoundProps {
	className?: string
}

export const NotFound: FC<NotFoundProps> = memo((props: NotFoundProps) => {
	const { className } = props
	const { t } = useTranslation()

	return <PageWrapper className={classNames(cls.NotFound, {}, [className])}>
		<Text
			variant={TextVariant.ERROR}
			size={TextSize.L}
			content={t('not-found')}
		/>
	</PageWrapper>
})