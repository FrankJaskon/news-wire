import { FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
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
		<div className={classNames(cls.ArticleImageBlock, {}, [className])}>
			<img
				className={cls.img}
				src={src}
				alt={title}
			/>
			{title && <Text
				className={cls.title}
				content={title}
				align='center'
			/>}
		</div>
	)
})