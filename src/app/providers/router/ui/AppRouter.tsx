import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
    return <Suspense fallback={<div>Loading</div>}>
        <Routes>
           {
                routerConfig.map(props => (
                    <Route key={props.path} {...props} />
                ))
           }
        </Routes>
    </Suspense>
}