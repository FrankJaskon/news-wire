import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { UiDesignToggler as UiDesignTogglerDeprecated } from './deprecated/UiDesignToggler'
import { UiDesignToggler as UiDesignTogglerRedesigned } from './redesigned/UiDesignToggler'

export const UiDesignToggler: FC = memo(() => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<UiDesignTogglerRedesigned />}
			off={<UiDesignTogglerDeprecated />}
		/>
	)
})
