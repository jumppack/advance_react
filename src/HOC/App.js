import {useState, useEffect} from 'react'

const withMousePosition = (WrappedComponent) => {
    return (props)=> {
        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0
        })

        useEffect( () => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange)
            }
        }, [])

        return <WrappedComponent {...props} mousePosition={mousePosition}/>
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) return null;

    return (
        <>
            <p>Mouse position: </p>
            <div className="row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </>
    )
}

const PointMouseLogger = ({mousePosition}) => {
    if (!mousePosition) return null;

    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
        )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger)


export default function App () {
    return (
        <div className="app">
            <header className="header">My HOC App</header>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    )
}