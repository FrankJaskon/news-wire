import { StoryFn } from '@storybook/react'
import '@/app/styles/index.scss'
import { toggleFeatures } from '@/shared/lib/features'

export const StyleDecorator = (StoryComponent: StoryFn) => (
	<div
		className={toggleFeatures({
			name: 'isAppRedesigned',
			on: () => 'App-redesign',
			off: () => 'App',
		})}
	>
		<StoryComponent />
	</div>
)
