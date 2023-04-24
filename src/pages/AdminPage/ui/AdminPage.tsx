import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AdminPage.module.scss'
import { PageWrapper } from '@/widgets/PageWrapper'

export interface AdminPageProps {
	className?: string
}

const AdminPage: FC<AdminPageProps> = (props) => {
	const { className } = props

	return <PageWrapper>
		<div className={classNames(cls.AdminPage, {}, [className])}>
			+
		</div>
	</PageWrapper>
}

export default memo(AdminPage)