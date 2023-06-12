import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader'
import { Loader as LoaderRedesigned } from '@/shared/ui/redesigned/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
	className?: string
	fullHeight?: boolean
}

export const PageLoader: FC<PageLoaderProps> = memo((props: PageLoaderProps) => {
	const { className, fullHeight = false } = props

	return (
		<div
			className={classNames(
				cls.PageLoader,
				{
					[cls.fullHeight]: fullHeight,
				},
				[className]
			)}
		>
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<LoaderRedesigned className={cls.loader} />}
				off={<LoaderDeprecated className={cls.loader} />}
			/>
		</div>
	)
})
