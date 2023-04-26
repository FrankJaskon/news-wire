import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import cls from './ArticleImageBlock.module.scss'

export interface ArticleImageBlockProps {
	className ?: string
	src: string
	title?: string
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props: ArticleImageBlockProps) => {
	const {
		className,
		src,
		title,
	} = props

	return (
		<VStack
			className={classNames('', {}, [className])}
			align='center'
			gap='8'
		>
			<img
				className={cls.img}
				src={src}
				alt={title}
			/>
			{
				title && <VStack>
					<Text
						className={cls.title}
						content={title}
						align='center'
					/>
				</VStack>
			}
		</VStack>
	)
})