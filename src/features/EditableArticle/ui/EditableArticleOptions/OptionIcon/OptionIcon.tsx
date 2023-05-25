import { FC, FunctionComponent, SVGAttributes } from 'react'
import { AppCard, CardVariant } from '@/shared/ui/deprecated/AppCard'
import { AppIcon, AppIconVariant } from '@/shared/ui/deprecated/AppIcon'
import { HStack } from '@/shared/ui/redesigned/HStack'

export interface OptionIconProps {
	className?: string
	icon: FunctionComponent<SVGAttributes<SVGElement>>
}

export const OptionIcon: FC<OptionIconProps> = props => {
	const { className, icon } = props

	return (
		<AppCard variant={CardVariant.PRIMARY} noPaddings className={className}>
			<HStack justify='center' align='center'>
				<AppIcon Svg={icon} variant={AppIconVariant.CONTRAST} />
			</HStack>
		</AppCard>
	)
}
