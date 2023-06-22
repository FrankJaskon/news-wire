import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { AppText } from '../AppText'
import { HStack } from '../HStack'
import cls from './YouTubeVideo.module.scss'

interface YouTubeVideoProps {
	className?: string
	src?: string
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = memo((props: YouTubeVideoProps) => {
	const { className, src } = props
	const videoId = useMemo(() => src?.split('/').at(-1), [src])
	const embedUrl = `https://www.youtube.com/embed/${videoId}`
	const { t } = useTranslation()

	return (
		<HStack justify='center'>
			{!videoId && <AppText variant='error' text={t('error')} />}
			{videoId && (
				<iframe
					className={classNames(cls.YouTubeVideo, {}, [className])}
					title='YouTube Video Player'
					width='560'
					height='315'
					src={embedUrl}
					allowFullScreen
				/>
			)}
		</HStack>
	)
})
