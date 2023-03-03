export type Mods = Record<string, boolean | undefined>

const classNames = (cls: string, mods: Mods = {}, extra: Array<string | undefined> = []): string => {
	return [
		cls,
		...extra.filter(Boolean),
		...Object.entries(mods)
			.filter(([key, value]) => value)
			.map(([key]) => key)
			.filter(Boolean)
	].join(' ').trim()
}

export default classNames