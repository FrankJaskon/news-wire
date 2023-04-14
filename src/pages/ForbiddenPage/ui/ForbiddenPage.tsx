import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ForbiddenPage.module.scss'
import { PageWrapper } from 'widgets/PageWrapper'

export interface ForbiddenPageProps {
	className?: string
}

export const ForbiddenPage: FC<ForbiddenPageProps> = (props) => {
	const { className } = props

	return <PageWrapper>
		<div className={classNames(cls.ForbiddenPage, {}, [className])}>
			Acces is forbidden
		</div>
	</PageWrapper>
}