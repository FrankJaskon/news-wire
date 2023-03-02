import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { AppInput } from 'shared/ui/Form/AppInput'
import { AppButton } from 'shared/ui/AppButton'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const data = useSelector(getProfileData)
	const error = useSelector(getError)
	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return <div className={classNames(cls.ProfileCard, {}, [className])}>
		<AppInput value={data?.firstname} placeholder={'Your first name'} />
		<AppInput value={data?.lastname} placeholder={'Your second name'} />
		<AppButton className={cls.editBtn}>Edit</AppButton>
	</div>
}