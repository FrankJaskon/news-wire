import { useContext, useMemo, ReactNode, createContext, useEffect, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextType {
	Spring?: SpringType
	Gesture?: GestureType
	isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextType>({})

const getAsyncAnimationModules = () =>
	Promise.all([import('@react-spring/web'), import('@use-gesture/react')])

export const useAnimationLibs = () => {
	return useContext(AnimationContext) as Required<AnimationContextType>
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
	const SpringRef = useRef<SpringType>()
	const GestureRef = useRef<GestureType>()
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	useEffect(() => {
		getAsyncAnimationModules().then(([Spring, Gesture]) => {
			SpringRef.current = Spring
			GestureRef.current = Gesture
			setIsLoaded(true)
		})
	})

	const value = useMemo(
		() => ({
			Spring: SpringRef.current,
			Gesture: GestureRef.current,
			isLoaded,
		}),
		[isLoaded]
	)

	return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
