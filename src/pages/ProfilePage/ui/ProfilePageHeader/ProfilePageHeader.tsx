import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { Text } from 'shared/ui/Text'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import cls from '../ProfilePage.module.scss'

interface ProfilePageHeaderProps {
	className?: string
	readonly?: boolean
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
	const {
		className,
		readonly,
	} = props

	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onClose = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData())
	}, [dispatch])

	return <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
		<Text title={t('card.header.title')} />
		{ readonly ?
			<AppButton
				onClick={onEdit}
				className={cls.editBtn}
			>{t('card.header.edit-btn')}</AppButton>
			: <div className={cls.btnGroup}>
				<AppButton
					onClick={onClose}
					className={cls.closeBtn}
					variant='outline'

				>{t('card.header.close-btn')}</AppButton>
				<AppButton
					onClick={onSave}
					className={cls.saveBtn}
				>{t('card.header.save-btn')}</AppButton>
			</div>
		}
	</div>
}