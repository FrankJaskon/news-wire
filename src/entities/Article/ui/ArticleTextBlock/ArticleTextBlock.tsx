import { FC, Fragment, memo, useMemo } from 'react'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextWeight } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './ArticleTextBlock.module.scss'

export interface ArticleTextBlockProps {
	className?: string
	paragraphs?: string[]
	title?: string
	readonly?: boolean
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
	const { className, paragraphs, title } = props
	const content = useMemo(() => {
		return paragraphs?.map((paragraph, index) => (
			<Fragment key={`paragraph-${index}-${paragraph}`}>
				<ToggleFeatures
					feature='isAppRedesigned'
					on={<AppText text={paragraph} />}
					off={<Text className={cls.paragraph} content={paragraph} align='justify' />}
				/>
			</Fragment>
		))
	}, [paragraphs])

	return (
		<VStack
			className={classNames('', {}, [className])}
			gap={toggleFeatures({ name: 'isAppRedesigned', on: () => '8', off: () => '12' })}
		>
			{title && (
				<ToggleFeatures
					feature='isAppRedesigned'
					on={<AppText title={title} />}
					off={
						<Text
							title={title}
							size={TextSize.S}
							titleHue={TextColor.SECONDARY}
							weight={TextWeight.BOLDER}
						/>
					}
				/>
			)}
			<div>{content}</div>
		</VStack>
	)
})
