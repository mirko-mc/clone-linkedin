import './ProfileContainer.css'
import { Container, Button } from 'react-bootstrap';
import { getProfileUrl } from '../fetchUrls';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContextProvider';

function ProfilePage({ id }) {
    // l'id lo ricevo direttamente dal componente padre    
    const [user, setUser] = useState(null)
    // stato per rendere visibile il form per cambiare immagine
    const [editMode, setEditMode] = useState(false)
    // stato per archiviare la nuova immagine e gestire il form soprastante
    const [fd, setFd] = useState(new FormData())

    // chiave per la fetch
    const apiKey = process.env.REACT_APP_APIKEY;

    const { selectedUser, setSelectedUser } = useContext(UserContext)

    // funzione che effettua la fetch per recuperare i dati del profilo in base all'id
    const getProfileData = async () => {
        const resp = await fetch(getProfileUrl + '/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            }
        })

        const data = await resp.json()
        setUser(data)
    }

    // aggiornamento dei dati del profilo su variazione dell'id
    useEffect(() => {
        id && id != selectedUser?._id ? getProfileData() : setUser(selectedUser)
    }, [id, selectedUser])

    const editPhoto = function () {
        setEditMode(!editMode)
    }

    const changePhoto = async (ev) => {
        ev?.preventDefault()
        let resp = await fetch( `${getProfileUrl}/${id}/picture`,
            {
                method: "POST",
                body: fd, //non serve JSON.stringify
                headers: {
                    Authorization: apiKey
                },
            }
        )
        if(resp.ok) {
            console.log('image changed')
        }
        else{
            console.log('error')
        } 
    }


    const handleFile = (ev) => {
        setFd((prev) => {
            //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
            prev.delete("post") //ricordatevi di svuotare il FormData prima :)
            prev.append("post", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
            return prev
        })
    }

    return (
        // selectedUser && mi serve perchè così evito di andare in errore perchè la roba della fetch non è ancora arrivata
        // renderizzo il componente solo quando ci sono anche i dati al suo interno
        user && <Container id='profileContainer'>
            <div id='upperSection'>
                <Button id='editPhoto'
                    onClick={() => { editPhoto() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0966c2" className="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                    </svg>
                </Button>
            </div>
            <div id='mainImgWrapper'>
                <div id="innerImgWrapper">
                    <svg viewBox="0 0 160 160" >
                        <circle cx="80" cy="80" r="79" fill="transparent" stroke="white" strokeWidth="5"></circle>
                    </svg>
                    <img src={user.image} alt="" />
                    {/* FORM UPLOAD IMMAGINE */}
                    {editMode &&
                        <form className='imgForm'>
                            <input type="file" onChange={handleFile} />
                            <Button onClick={() => {changePhoto()}}>SEND</Button>
                        </form>
                    }
                </div>
            </div>
            <div id='lowerSection'>
                <h5>{user.name + ' ' + user.surname}</h5>
                <p>{user.title}</p>
                <p>{user.area}</p>
            </div>
            <div id='buttons'>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg>
                    <span>Messaggio</span>
                </Button>
                <Button>
                    Altro
                </Button>
            </div>
        </Container>
    );
}

export default ProfilePage;