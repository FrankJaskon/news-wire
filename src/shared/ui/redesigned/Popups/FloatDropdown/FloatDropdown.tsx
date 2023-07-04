import {
	autoUpdate,
	flip,
	FloatingFocusManager,
	FloatingList,
	FloatingNode,
	FloatingPortal,
	FloatingTree,
	offset,
	safePolygon,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFloatingParentNodeId,
	useFloatingTree,
	useHover,
	useInteractions,
	useListItem,
	useListNavigation,
	useMergeRefs,
	useRole,
	useTypeahead,
} from '@floating-ui/react'
import {
	ButtonHTMLAttributes,
	createContext,
	Dispatch,
	FC,
	FocusEvent,
	FocusEventHandler,
	forwardRef,
	HTMLProps,
	memo,
	MouseEvent,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import cls from './FloartDropdown.module.scss'

const MenuContext = createContext<{
	getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
	activeIndex: number | null
	setActiveIndex: Dispatch<SetStateAction<number | null>>
	setHasFocusInside: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}>({
	getItemProps: () => ({}),
	activeIndex: null,
	setActiveIndex: () => {
		'blank'
	},
	setHasFocusInside: () => {
		'blank'
	},
	isOpen: false,
})

interface MenuProps {
	label: string
	nested?: boolean
	children?: ReactNode
	onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void
}

export const MenuComponent = forwardRef<
	HTMLButtonElement,
	MenuProps & HTMLProps<HTMLButtonElement>
>(({ children, label, ...props }, forwardedRef) => {
	const [isOpen, setIsOpen] = useState(false)
	const [hasFocusInside, setHasFocusInside] = useState(false)
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const elementsRef = useRef<Array<HTMLButtonElement | null>>([])
	const labelsRef = useRef<Array<string | null>>([])
	const parent = useContext(MenuContext)

	const tree = useFloatingTree()
	const nodeId = useFloatingNodeId()
	const parentId = useFloatingParentNodeId()
	const item = useListItem()

	const isNested = parentId != null

	const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
		nodeId,
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: isNested ? 'right-start' : 'bottom-start',
		middleware: [
			offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
			flip(),
			shift(),
		],
		whileElementsMounted: autoUpdate,
	})

	const hover = useHover(context, {
		enabled: isNested,
		delay: { open: 75 },
		handleClose: safePolygon({ blockPointerEvents: true }),
	})
	const click = useClick(context, {
		event: 'mousedown',
		toggle: !isNested,
		ignoreMouse: isNested,
	})
	const role = useRole(context, { role: 'menu' })
	const dismiss = useDismiss(context, { bubbles: true })
	const listNavigation = useListNavigation(context, {
		listRef: elementsRef,
		activeIndex,
		nested: isNested,
		onNavigate: setActiveIndex,
	})
	const typeahead = useTypeahead(context, {
		listRef: labelsRef,
		onMatch: isOpen ? setActiveIndex : undefined,
		activeIndex,
	})

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		hover,
		click,
		role,
		dismiss,
		listNavigation,
		typeahead,
	])

	// Event emitter allows you to communicate across tree components.
	// This effect closes all menus when an item gets clicked anywhere
	// in the tree.
	useEffect(() => {
		if (!tree) return

		function handleTreeClick() {
			setIsOpen(false)
		}

		function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
			if (event.nodeId !== nodeId && event.parentId === parentId) {
				setIsOpen(false)
			}
		}

		tree.events.on('click', handleTreeClick)
		tree.events.on('menuopen', onSubMenuOpen)

		return () => {
			tree.events.off('click', handleTreeClick)
			tree.events.off('menuopen', onSubMenuOpen)
		}
	}, [tree, nodeId, parentId])

	useEffect(() => {
		if (isOpen && tree) {
			tree.events.emit('menuopen', { parentId, nodeId })
		}
	}, [tree, isOpen, nodeId, parentId])

	return (
		<FloatingNode id={nodeId}>
			<button
				ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
				tabIndex={!isNested ? undefined : parent.activeIndex === item.index ? 0 : -1}
				role={isNested ? 'menuitem' : undefined}
				data-open={isOpen ? '' : undefined}
				data-nested={isNested ? '' : undefined}
				data-focus-inside={hasFocusInside ? '' : undefined}
				className={isNested ? cls.MenuItem : cls.RootMenu}
				{...getReferenceProps(
					parent.getItemProps({
						...props,
						onFocus(event: FocusEvent<HTMLButtonElement>) {
							props.onFocus?.(event)
							setHasFocusInside(false)
							parent.setHasFocusInside(true)
						},
					})
				)}
			>
				{label}
				{isNested && (
					<span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
						{'>'}
					</span>
				)}
			</button>
			<MenuContext.Provider
				value={{
					activeIndex,
					setActiveIndex,
					getItemProps,
					setHasFocusInside,
					isOpen,
				}}
			>
				<FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
					{isOpen && (
						<FloatingPortal>
							<FloatingFocusManager
								context={context}
								modal={false}
								initialFocus={isNested ? -1 : 0}
								returnFocus={!isNested}
							>
								<div
									ref={refs.setFloating}
									className={cls.Menu}
									style={floatingStyles}
									{...getFloatingProps()}
								>
									{children}
								</div>
							</FloatingFocusManager>
						</FloatingPortal>
					)}
				</FloatingList>
			</MenuContext.Provider>
		</FloatingNode>
	)
})

interface MenuItemProps {
	label: string
	disabled?: boolean
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	onFocus?: (event: FocusEventHandler<HTMLButtonElement>) => void
}

export const FloatDropdownItem = forwardRef<
	HTMLButtonElement,
	MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, ...props }, forwardedRef) => {
	const menu = useContext(MenuContext)
	const item = useListItem({ label: disabled ? null : label })
	const tree = useFloatingTree()
	const isActive = item.index === menu.activeIndex

	return (
		<button
			{...props}
			ref={useMergeRefs([item.ref, forwardedRef])}
			type='button'
			role='menuitem'
			className={cls.MenuItem}
			tabIndex={isActive ? 0 : -1}
			disabled={disabled}
			{...menu.getItemProps({
				onClick(event: MouseEvent<HTMLButtonElement>) {
					props.onClick?.(event)
					tree?.events.emit('click')
				},
				onFocus(event: FocusEvent<HTMLButtonElement>) {
					props.onFocus?.(event)
					menu.setHasFocusInside(true)
				},
			})}
		>
			{label}
		</button>
	)
})

export const FloatDropdownMenu = forwardRef<
	HTMLButtonElement,
	MenuProps & HTMLProps<HTMLButtonElement>
>((props, ref) => {
	const parentId = useFloatingParentNodeId()

	if (parentId === null) {
		return (
			<FloatingTree>
				<MenuComponent {...props} ref={ref} />
			</FloatingTree>
		)
	}

	return <MenuComponent {...props} ref={ref} />
})

export interface FloatDropdownItemType {
	label?: string
	disabled?: boolean
	onClick?: () => void
	trigger?: ReactNode
	items?: FloatDropdownItemType[]
}

export interface DropdownProps {
	trigger?: any
	items?: FloatDropdownItemType[]
	label?: string
	disabled?: boolean
	onClick?: () => void
}

export const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
	const { trigger, items, label, disabled, onClick } = props

	if (trigger) {
		return (
			<FloatDropdownMenu label={trigger}>
				{items?.map((item, index) => (
					<FloatDropdown key={`dropdown-item-${index}`} {...item} />
				))}
			</FloatDropdownMenu>
		)
	}

	if (label) {
		return <FloatDropdownItem label={label} onClick={onClick} disabled={disabled} />
	}

	return null
}

export interface FloatDropdownProps extends Omit<DropdownProps, 'trigger'> {
	trigger?: ReactNode
}

export const FloatDropdown: FC<FloatDropdownProps> = memo((props: FloatDropdownProps) => {
	return <Dropdown {...props} />
})
