import { FC, ImgHTMLAttributes, memo, useLayoutEffect, useState } from 'react'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string
	src?: string
	alt?: string
	fallback?: JSX.Element
	errorFallback?: JSX.Element
}

export const AppImage: FC<AppImageProps> = memo((props: AppImageProps) => {
	const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [hasError, setHasError] = useState<boolean>(false)

	useLayoutEffect(() => {
		const image = new Image()

		image.src = src || ''
		image.onload = () => {
			setIsLoading(false)
		}
		image.onerror = () => {
			setIsLoading(false)
			setHasError(true)
		}
	}, [src])

	if (isLoading && fallback) {
		return fallback
	}

	if (hasError && errorFallback) {
		return errorFallback
	}

	return <img className={className} src={src} alt={alt} {...otherProps} />
})
