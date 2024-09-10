import { createContext, useEffect, useState } from "react";
import {getMeUrl} from '../../fetchUrls'
// questo è il contesto a tutti gli effetti
export const UserContext = createContext()


// la funzione invece è un componente dove all'interno uso il provider
export function UserContextProvider({ children }) {
    const [selectedUser, setSelectedUser] = useState(null)
    const value = {selectedUser, setSelectedUser}
    const apiKey = process.env.REACT_APP_APIKEY;

    const loadMeUser = async () => {
        const resp = await fetch(getMeUrl
            , {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": apiKey
                }
            }
        )

        const data = await resp.json()
        setSelectedUser(data)
    }
    // con le graffe attorno a loadMeUser sto eliminando il retrun automatico che è implicito 
    // nella arrow function senza graffe. le tonde le devo inserire perchè se no la funzione 
    // non viene richiamata in automatico
    useEffect(() => {loadMeUser()}, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}