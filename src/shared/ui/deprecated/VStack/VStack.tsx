import { FC } from 'react'
import { FlexStack, FlexStackProps } from '../FlexStack/FlexStack'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

type VStackProps = Omit<FlexStackProps, 'direction'>

export const VStack: FC<VStackProps> = props => {
	return <FlexStack direction='column' {...props} />
}
