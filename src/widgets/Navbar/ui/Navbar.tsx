import { userActions } from 'entities/User'
import { getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
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
	const authData = useSelector(getUserAuthData)
	const dispatch = useAppDispatch()

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.removeAuthData())
	}, [dispatch])

	if (authData) {
		return <header className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.linksGroup}>
				<AppButton
					className={cls.link}
					variant='custom'
					onClick={onLogout}>
					{t('navbar.logout')}
				</AppButton>
			</div>
		</header>
	}

	return <header className={classNames(cls.Navbar, {}, [className])}>
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
	</header>
})