import {useState} from 'react'
import useConsoleLog from './useConsoleLog'

export default function App_withCustomHook () {
    const [count, setCount] = useState(0);
    useConsoleLog(count);

    function incrementCount () {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <h1>Example of custom hook</h1>
            <button onClick={incrementCount}>Increment</button>
            <input type='text' value={count} />
        </>
    )
}