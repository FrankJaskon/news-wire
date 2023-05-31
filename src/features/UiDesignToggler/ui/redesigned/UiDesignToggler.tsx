import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { updateFeatures, useUserAuthData, useUserFeatureByKey } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Toggler } from '@/shared/ui/redesigned/Toggler'

export const UiDesignToggler: FC = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const userData = useUserAuthData()
	const isNewDesignActive = useUserFeatureByKey('isAppRedesigned')
	const [isChecked, setIsChecked] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsChecked(isNewDesignActive ?? false)
	}, [isNewDesignActive])

	const handleOnChange = useCallback(async () => {
		setIsChecked(!isChecked)
		if (userData?.id) {
			setIsLoading(true)
			await dispatch(
				updateFeatures({ id: userData?.id, newFeatures: { isAppRedesigned: !isChecked } })
			)
			setIsLoading(false)
		}
	}, [dispatch, isChecked, userData?.id])

	return (
		<HStack gap='8' align='center'>
			<AppLabel htmlFor='UiDesignToggler'>{t('ui-design-toggler')}</AppLabel>
			<Toggler isChecked={isChecked} onChange={handleOnChange} readOnly={isLoading} />
		</HStack>
	)
})
