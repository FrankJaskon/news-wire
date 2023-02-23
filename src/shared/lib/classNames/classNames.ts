type Mods = Record<string, boolean | string>

const classNames = (cls: string, mods: Mods = {}, extra: string[] = []): string => {
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