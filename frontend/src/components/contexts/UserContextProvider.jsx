import { createContext, useEffect, useState } from "react";
import { getMeUrl } from '../../fetchUrls';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token")); // Aggiungo gestione del token
    const [selectedUser, setSelectedUser] = useState(null);
    const value = { selectedUser, setSelectedUser, token, setToken }; // rendo "disponibile" token e setToken
    const apiKey = process.env.REACT_APP_APIKEY;

    const loadMeUser = async () => {
        if (!token) return; // Non carico l'utente se non c'è un token

        const resp = await fetch(getMeUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (resp.ok) {
            const data = await resp.json();
            setSelectedUser(data);
        } else {
            setToken(null); // Resetto il token se c'è un errore
            localStorage.removeItem('token');
        }
    };

    useEffect(() => {
        loadMeUser();
    }, [token]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
