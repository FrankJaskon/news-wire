import { FC } from 'react'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ArticleCategoryType } from '../model/types/articleCategory'

export interface ArticleCategoryProps {
	className?: string
	category: ArticleCategoryType
}

export const ArticleCategory: FC<ArticleCategoryProps> = props => {
	const { className, category } = props

	return (
		<VStack gap='16' className={className} align='center' justify='center' max={false}>
			{category.content && <AppText title={category.content} size='l' />}
			<AppLink to={category.href}>
				<AppIcon Svg={category.Icon} height={100} width={100} clickable />
			</AppLink>
		</VStack>
	)
}
