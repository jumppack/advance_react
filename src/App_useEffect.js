import React from 'react'

export default function App () {
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle)
    }

    React.useEffect( () => {
        document.title = toggle ? "Welcome to my app" : "Welcome to useEffect hook"
    }, [toggle])

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button
                onClick={clickHandler}>
                Toggle
            </button>
            {toggle && <h2>Welcome to my App</h2>}
        </div>
    )
}