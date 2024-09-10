import { useContext } from 'react';
import './MyHeader.css'
import { UserContext } from './contexts/UserContextProvider';
import MyNav from './MyNav';

function MyHeader() {
    // qui richiamo userContext
    return ( 
        <>
            <MyNav />
        </>

        
    );
}

export default MyHeader;