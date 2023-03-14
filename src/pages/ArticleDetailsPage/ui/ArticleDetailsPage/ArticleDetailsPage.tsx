import { ArticleDetails } from 'entities/Article'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { FC, memo, ReactNode, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { Text } from 'shared/ui/Text'
import { useSelector } from 'react-redux'
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
	getArticleDetailsReadonly
} from '../../model/selectors/articleDetailsSelectors'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ValidateArticleDetailsError } from '../../model/types/ArticleDetailsScheme'

export interface ArticleDetailsPageProps {
	className ?: string
}

const reducers: ReducerList = {
	articleDetails: articleDetailsReducer
} as const

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const {
		className
	} = props

	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const id = Number(useParams().id)
	const article = useSelector(getArticleDetailsData)
	const isLoading = useSelector(getArticleDetailsIsLoading)
	const error = useSelector(getArticleDetailsError)
	const readonly = useSelector(getArticleDetailsReadonly)

	const ValidateArticleDetailsErrorTranslation = useMemo(() => ({
		[ValidateArticleDetailsError.NO_DATA]: t('error.empty'),
		[ValidateArticleDetailsError.SERVER_ERROR]: t('error.server-error'),
	}), [t])

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(Number(id)))
		}
	}, [dispatch, id])

	let content: ReactNode

	if (!id && __PROJECT__ !== 'storybook') {
		content = <Text variant='error' content={t('details.error.article-not-found')} />
	} else {
		content = <ArticleDetails
			isLoading={isLoading}
			article={article}
			error={error && ValidateArticleDetailsErrorTranslation[error]}
			readonly={readonly}
		/>
	}

	return <LazyReducerLoader
		removeAfterUnmount
		reducers={reducers}
	>
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			{content}
		</div>
	</LazyReducerLoader>
}

export default memo(ArticleDetailsPage)