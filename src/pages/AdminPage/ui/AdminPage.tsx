import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { PageWrapper } from '@/widgets/PageWrapper'
import cls from './AdminPage.module.scss'

export interface AdminPageProps {
	className?: string
}

const AdminPage: FC<AdminPageProps> = props => {
	const { className } = props

	return (
		<PageWrapper data-testid='admin-page'>
			<div className={classNames(cls.AdminPage, {}, [className])}>+</div>
		</PageWrapper>
	)
}

export default memo(AdminPage)
