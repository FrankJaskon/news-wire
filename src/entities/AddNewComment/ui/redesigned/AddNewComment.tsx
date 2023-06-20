import { FC, FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import CommentIcon from '@/shared/assets/icons/comment.svg'
import SendIcon from '@/shared/assets/icons/send.svg'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { useNewCommentText } from '../../model/selectors/newCommentSelectors'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice'
import cls from './AddNewComment.module.scss'

export interface AddNewCommentProps {
	className?: string
	handleSubmit: (value: string) => void
	'data-testid'?: string
}

const reducers: ReducerList = {
	addNewComment: addNewCommentReducer,
}

export const AddNewComment: FC<AddNewCommentProps> = memo((props: AddNewCommentProps) => {
	const { className, handleSubmit, 'data-testid': dataTestId = 'add-new-comment' } = props
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const text = useNewCommentText()

	const handleChange = useCallback(
		(value: string) => {
			dispatch(addNewCommentActions.setCommentText(value))
		},
		[dispatch]
	)

	const handleCancel = useCallback(() => {
		dispatch(addNewCommentActions.setCommentText(undefined))
	}, [dispatch])

	const handleSubmitNewComment = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			handleSubmit(text)
			handleCancel()
		},
		[handleSubmit, handleCancel, text]
	)

	return (
		<LazyReducerLoader reducers={reducers}>
			<form onSubmit={handleSubmitNewComment}>
				<HStack
					align='center'
					gap='16'
					className={classNames(cls.AddNewComment, {}, [className])}
				>
					<AppInput
						placeholder={t('new-comment.label')}
						className={cls.input}
						value={text}
						onChange={handleChange}
						data-testid={dataTestId}
						addonLeft={<AppIcon Svg={CommentIcon} height={24} width={24} />}
					/>
					<AppIcon Svg={SendIcon} clickable btnType='button' />
				</HStack>
			</form>
		</LazyReducerLoader>
	)
})
