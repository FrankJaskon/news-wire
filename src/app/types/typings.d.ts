declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames
    export = classNames;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __iS_DEV__: boolean
declare const __API_URL__: string
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T