type Mods = Record<string, boolean | string>

const classNames = (cls: string, mods: Mods, extra: string[]): string => {
    return [
        cls,
        ...extra,
        ...Object.entries(mods)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
    ].join(' ')
}

export default classNames