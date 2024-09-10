import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react'
import './HomePage.css'
import ProfileContainer from '../ProfileContainer'
import ExperienceContainer from '../ExperienceContainer'
import { UserContext } from '../contexts/UserContextProvider';
import AddExperience from '../AddExperience';

function HomePage() {
    // stato per gestire l'id dell'utente di cui vogliamo vedere il profilo
    const [userId, setUserId] = useState(null)
    const [expChanged, setExpChanged] = useState(false)

    // mi memorizzo in id se c'è un id nell'url
    const { id } = useParams();

    // recupero dal contesto selectedUser
    const { selectedUser } = useContext(UserContext)

    // questo useEffect si attiva al caricamento del componente e alla variazione dell'id nell'url o alla 
    // variazione del contesto (l'utente /me)
    // se c'è un id nell'url, allora è quello che voglio far vedere sotto.
    // se non c'è, allora prendo l'utente nel contesto
    useEffect(() => {
        // il ? dopo selectedUser serve a evitare che si spacchi il ternario al primo giro, in quanto
        // il contesto contiene una chiamat async che al caricamento del componente non ha ancora girato
        // di conseguenza avrà selectedUser = null.
        id ? setUserId(id) : setUserId(selectedUser?._id)
    },[id, selectedUser])

    return ( 
        <>
            <ProfileContainer id={userId}/>
            <AddExperience id={userId} expChanged={expChanged} setExpChanged={setExpChanged}></AddExperience>
            <ExperienceContainer id={userId} expChanged={expChanged} setExpChanged={setExpChanged}/>
        </>
    );
}

export default HomePage;