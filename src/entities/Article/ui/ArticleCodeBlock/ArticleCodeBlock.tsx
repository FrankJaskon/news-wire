import { FC, memo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ValueOf } from '@/shared/types/types'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/AppButton'
import cls from './ArticleCodeBlock.module.scss'
import { VStack } from '@/shared/ui/Stack'
import { AppCard } from '@/shared/ui/AppCard'

export interface ArticleCodeBlockProps {
	className?: string
	code?: string
}

const BtnText = {
	BASIC: 'copy-code',
	SUCCESS: 'copy-successful',
	ERROR: 'copy-error'
} as const

type BtnTextType = ValueOf<typeof BtnText>

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
	const {
		className,
		code,
	} = props

	const { t } = useTranslation()
	const codeRef = useRef<HTMLDivElement>(null)
	const [btnText, setBtnText] = useState<BtnTextType>(BtnText.BASIC)

	const handleCopy = () => {
		if (codeRef.current) {
			const codeText = codeRef.current.innerText
			navigator.clipboard.writeText(codeText)
				.then(() => {
					setBtnText(BtnText.SUCCESS)
				})
				.catch(() => {
					setBtnText(BtnText.ERROR)
				})
				.finally(() => {
					setTimeout(() => {
						setBtnText(BtnText.BASIC)
					}, 1000)
				})
		}
	}

	const isInProgress = btnText !== BtnText.BASIC

	return (
		<VStack className={classNames(cls.ArticleCodeBlock, {}, [className])}>
			<AppCard
				noPaddings
			>
				<div className={cls.header}>
					{isInProgress
						? <AppButton className={cls.copyBtn}>
							{t(btnText)}
						</AppButton>
						: <AppButton
							className={cls.copyBtn}
							onClick={handleCopy}
						>
							{t(btnText)}
						</AppButton>
					}
				</div>
				<pre className={cls.code}>
					<code ref={codeRef}>
						{code}
					</code>
				</pre>
			</AppCard>
		</VStack>
	)
})