import { useState } from 'react'
import { render } from 'react-dom'
import Test from './components/test'
import './style.scss'

const App = () => {
    const [count, setCount] = useState<number>(0)
    return <div>
        <Test />
        <h1 className='blue'>Counter</h1>
        <button onClick={() => setCount( prev => prev - 1)}>-</button>
            {count}
        <button onClick={() => setCount( prev => prev + 1)}>+</button>
    </div>
}

render(
    <App />,
    document.getElementById('root')
)