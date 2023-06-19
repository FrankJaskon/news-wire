import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainPage as MainPageDeprecated } from './deprecated/MainPage'
import { MainPage as MainPageRedesigned } from './redesigned/MainPage'

const MainPage: FC = () => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<MainPageRedesigned />}
			off={<MainPageDeprecated />}
		/>
	)
}

export default memo(MainPage)
