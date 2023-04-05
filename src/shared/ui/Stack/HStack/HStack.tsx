import { FC } from 'react'
import { FlexStack, FlexStackProps } from '../FlexStack/FlexStack'

type HStackProps = Omit<FlexStackProps, 'direction'>

export const HStack: FC<HStackProps> = (props) => {
	return <FlexStack direction='row' {...props} />
}