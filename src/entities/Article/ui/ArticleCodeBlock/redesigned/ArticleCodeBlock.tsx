import { FC, MutableRefObject, memo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CopyIcon from '@/shared/assets/icons/copy.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppText } from '@/shared/ui/redesigned/AppText'
import cls from './ArticleCodeBlock.module.scss'

export interface ArticleCodeBlockProps {
	className?: string
	code?: string
	readonly?: boolean
}

const BtnText = {
	BASIC: 'copy-code',
	SUCCESS: 'copy-successful',
	ERROR: 'copy-error',
} as const

type BtnTextType = ValueOf<typeof BtnText>

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
	const { className, code } = props

	const { t } = useTranslation()
	const ref: MutableRefObject<NodeJS.Timeout | undefined> = useRef(undefined)
	const codeRef = useRef<HTMLDivElement>(null)
	const [btnText, setBtnText] = useState<BtnTextType>(BtnText.BASIC)

	const handleCopy = () => {
		if (codeRef.current) {
			const codeText = codeRef.current.innerText
			navigator.clipboard
				.writeText(codeText)
				.then(() => {
					setBtnText(BtnText.SUCCESS)
				})
				.catch(() => {
					setBtnText(BtnText.ERROR)
				})
				.finally(() => {
					const timeoutId = setTimeout(() => {
						setBtnText(BtnText.BASIC)
					}, 1000)
					if (ref.current) {
						clearTimeout(ref.current)
					}
					ref.current = timeoutId
				})
		}
	}

	const isInProgress = btnText !== BtnText.BASIC

	return (
		<AppCard
			padding='16'
			variant='outlined'
			className={classNames(cls.ArticleCodeBlock, {}, [className])}
		>
			{isInProgress ? (
				<AppText text={t('copy-successful')} className={cls.copy} />
			) : (
				<AppIcon Svg={CopyIcon} onClick={handleCopy} clickable className={cls.copy} />
			)}
			<pre>
				<code className={cls.code} ref={codeRef}>
					{code}
				</code>
			</pre>
		</AppCard>
	)
})
