import "./App.css"
import {UserContextProvider, useUser} from './UserContext';

const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>
            Hello <span className="username"> {user.name}</span>
        </p>
    )
}

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    )
}

const Page = () => {
    const {user} = useUser();
    return (
        <div>
            <h2>This is lorem ispusm</h2>
            <p>
                This is some more text
            </p>
            <p>
                Written by {user.name}
            </p>
        </div>
    )
}

function App () {
    return (
        <div className="app">
            <Header />
            <Page />
        </div>
    )
}

function Root () {
    return (
        <UserContextProvider>
            <App />
        </UserContextProvider>
    )
}

export default Root;