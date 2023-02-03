import { useState } from 'react'
import { render } from 'react-dom'
import './style.scss'

const App = () => {
    const [count, setCount] = useState<number>(0)
    return <div>
        <h1>Counter</h1>
        <button onClick={() => setCount( prev => prev - 1)}>-</button>
            {count}
        <button onClick={() => setCount( prev => prev + 1)}>+</button>
    </div>
}

render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
)