import { StoryFn } from '@storybook/react'
import '@/app/styles/index.scss'

export const StyleDecorator = (StoryComponent: StoryFn) => (
	<div className='App'>
		<StoryComponent />
	</div>
)
