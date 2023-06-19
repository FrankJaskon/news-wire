import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { PageWrapper } from '@/widgets/PageWrapper'
import cls from './AdminPage.module.scss'

export interface AdminPageProps {
	className?: string
}

const AdminPage: FC<AdminPageProps> = props => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<PageWrapper data-testid='admin-page'>
					<VStack gap='24'>
						<AppText title={t('admin-page.title')} size='l' weight='bold' />
						<AppText text={t('admin-page.paragraphs.first')} />
					</VStack>
				</PageWrapper>
			}
			off={
				<PageWrapper data-testid='admin-page'>
					<div className={classNames(cls.AdminPage, {}, [className])}>+</div>
				</PageWrapper>
			}
		/>
	)
}

export default memo(AdminPage)
