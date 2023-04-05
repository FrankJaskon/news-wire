import { FC } from 'react'
import { FlexStack, FlexStackProps } from '../FlexStack/FlexStack'

type VStackProps = Omit<FlexStackProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
	return <FlexStack direction='column' {...props} />
}