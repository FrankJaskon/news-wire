import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { Text } from 'shared/ui/Text'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import cls from '../ProfilePage.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

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
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit: boolean = useMemo(() => (
		authData?.id === profileData?.id
	), [authData?.id, profileData?.id])


	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onClose = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		authData?.id && dispatch(updateProfileData())
	}, [dispatch, authData?.id])

	return <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
		<Text title={t('card.header.title')} />
		{ canEdit && <>
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
		</> }
	</div>
}