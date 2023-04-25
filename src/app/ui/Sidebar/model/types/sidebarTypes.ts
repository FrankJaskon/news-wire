export interface SidebarItemType {
	path: string
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	text: string
	authOnly?: boolean
}