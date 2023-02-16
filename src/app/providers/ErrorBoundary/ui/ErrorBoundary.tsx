import { ErrorPage } from 'pages/ErrorPage'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface Props {
	children?: ReactNode;
  }

  interface State {
	hasError: boolean;
  }

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.error(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <Suspense fallback=''><ErrorPage /></Suspense>
		}

		return this.props.children
	}
}