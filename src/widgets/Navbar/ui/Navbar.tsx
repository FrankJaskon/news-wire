import { LoginModal } from 'features/AuthByUsername'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { Modal } from 'shared/ui/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	return <div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.linksGroup}>
			<AppButton
				className={cls.link}
				variant='custom'
				onClick={openModal}>{t('navbar.login')}</AppButton>
		</div>
		<LoginModal
			isOpen={isAuthModal}
			onClose={closeModal} />
	</div>
}