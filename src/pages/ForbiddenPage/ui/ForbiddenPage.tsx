import { FC } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { PageWrapper } from '@/widgets/PageWrapper'
import cls from './ForbiddenPage.module.scss'

export interface ForbiddenPageProps {
	className?: string
}

export const ForbiddenPage: FC<ForbiddenPageProps> = (props) => {
	const { className } = props

	return <PageWrapper
		data-testid='forbidden-page'
	>
		<div className={classNames(cls.ForbiddenPage, {}, [className])}>
			+
		</div>
	</PageWrapper>
}