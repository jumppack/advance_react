import { createContext, useState, useContext } from "react";

const UserContext = createContext(undefined);

export const UserContextProvider = () => {
    const [user] = useState({
        name: "Karan",
        age: 35,
        email: 'karan.mehta@gmail.com'
    })

    return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext);