import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import cls from './ArticleImageBlock.module.scss'

export interface ArticleImageBlockProps {
	className?: string
	src?: string
	title?: string
	readonly?: boolean
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(
	(props: ArticleImageBlockProps) => {
		const { className, src, title } = props

		return (
			<VStack className={classNames('', {}, [className])} align='center' gap='8'>
				<AppImage
					className={cls.img}
					src={src}
					alt={title}
					fallback={<Skeleton height={300} />}
				/>
				{title && (
					<VStack>
						<Text className={cls.title} content={title} align='center' />
					</VStack>
				)}
			</VStack>
		)
	}
)
