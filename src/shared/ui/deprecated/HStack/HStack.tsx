import { FC } from 'react'
import { FlexStack, FlexStackProps } from '../FlexStack/FlexStack'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

type HStackProps = Omit<FlexStackProps, 'direction'>

export const HStack: FC<HStackProps> = props => {
	return <FlexStack direction='row' {...props} />
}
