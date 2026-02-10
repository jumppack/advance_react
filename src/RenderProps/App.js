import {useEffect, useState} from 'react'

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([]);

    useEffect( () =>{
        if(url.includes('desserts')) {
            setData([
                "cake",
                "ice cream",
                "pie",
                "brownie"
            ])
        } else {
            setData([
                "water",
                "soda",
                "juice"
            ])
        }
    }, [url]);

    return render(data);
}


const DessertCount = () => {
    return (
        <DataFetcher
            url="https://myapp/desserts"
            render={(data) => (
                <p>{data.length} desserts</p>
            )}
        />
    );
}

const DrinkCount = () => {
    return (
        <DataFetcher
            url="https://myapp/drinks"
            render={(data) => (
                <h3>{data.length} drinks</h3>
            )}
        />
    )
}

export default function App () {
    return (
        <>
            <header>My App with render props</header>
            <DessertCount />
            <DrinkCount />
        </>
    )
}
