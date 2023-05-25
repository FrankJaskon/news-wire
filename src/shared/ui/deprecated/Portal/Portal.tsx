import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

interface PortalProps {
	children: ReactNode
	element?: HTMLElement
}

export const Portal: FC<PortalProps> = props => {
	const { children, element = document.body } = props

	return createPortal(children, element)
}
