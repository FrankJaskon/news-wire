import { FC, memo } from 'react'
import { AppButton } from '../AppButton'
import { AppTooltip } from './AppTooltip'

export interface AppPromptProps {
	prompt?: string
	className?: string
}

export const AppPrompt: FC<AppPromptProps> = memo((props: AppPromptProps) => {
	const { prompt, className } = props

	if (!prompt) {
		return null
	}

	return (
		<AppButton variant='custom' as='span' type='button' className={className}>
			<AppTooltip tooltip={prompt} as='span'>
				(?)
			</AppTooltip>
		</AppButton>
	)
})
