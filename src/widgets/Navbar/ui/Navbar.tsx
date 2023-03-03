import { User, userActions } from 'entities/User'
import { getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const authData: User | undefined = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onLogout = useCallback(() => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
		dispatch(userActions.removeAuthData())
	}, [dispatch])

	if (authData) {
		return <div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.linksGroup}>
				<AppButton
					className={cls.link}
					variant='custom'
					onClick={onLogout}>
					{t('navbar.logout')}
				</AppButton>
			</div>
		</div>
	}

	return <div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.linksGroup}>
			<AppButton
				className={cls.link}
				variant='custom'
				onClick={openModal}>
				{t('navbar.login')}
			</AppButton>
		</div>
		<LoginModal
			isOpen={isAuthModal}
			onClose={closeModal} />
	</div>
})