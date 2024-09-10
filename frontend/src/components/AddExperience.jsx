import { Button, Container, Form } from 'react-bootstrap';
import './AddExperience.css'
import { useContext, useEffect, useState } from 'react';
import {getProfileUrl} from '../fetchUrls'
import { UserContext } from './contexts/UserContextProvider';

function AddExperience({id, expChanged, setExpChanged}) {
    
    const apiKey = process.env.REACT_APP_APIKEY;
    
    const voidExp = {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: ""
    }
    // contesto per recuperare l'utente loggato
    const {selectedUser, setSelectedUser} = useContext(UserContext)

    // stato per verificare se utente loggato = pagina di cui sto caricando il profilo
    const [isMainUserProfile, setIsMainUserProfile] = useState(false)

    // al cambiamento di selectedUser e id, rifaccio il controllo. SelectedUser mi serve perchè arriva
    // dalla fetch e ci mette un attimo a caricare. Id perchè così quando cambio pagina, ricontrollo
    // di chi è il profilo che viene caricato
    useEffect(() =>setIsMainUserProfile(id === selectedUser?._id || id === undefined),[selectedUser, id])
    

    // stato per il form
    const [exp, setExp] = useState(voidExp)

    // funzione per aggiornare un campo del form (a prescindere da quel sia, me lo dice l'event qual è)
    const updateInput = (event) => {
        const target = event.target
        setExp({ ...exp, [target.name]: target.value })
    }

    // funzione per inserire l'esperienza nel backend
    const saveExperience = async function(){
        const resp = await fetch(getProfileUrl+'/'+id+'/experiences',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            },
            body: JSON.stringify(exp)
        })

        if(resp.ok) {
            setExp(voidExp); 
            setExpChanged(!expChanged)
        }
        else{
            console.log('error')
        } 
    }
    // stato per mostrare il form su click del button
    const [showForm, setShowForm] = useState('none')

    return (
        isMainUserProfile && <Container id="addExperience">
            <Button onClick={() => {showForm === 'none' ? setShowForm('block') : setShowForm('none')}}>
                Add Experiences
            </Button>
            
            <Form style={{display: showForm}}>
                <hr></hr>
                <div className='topRow'>
                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            placeholder="Role" name='role' type='text'
                            value={exp.role}
                            onChange={updateInput}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            placeholder="Company" name='company' type='text'
                            value={exp.company}
                            onChange={updateInput}
                        />
                    </Form.Group>
                </div>
                <div className='datesRow'>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            name='startDate' type='date'
                            value={exp.startDate}
                            onChange={updateInput}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            name='endDate' type='date'
                            value={exp.endDate}
                            onChange={updateInput}
                        />
                    </Form.Group>
                </div>
                <Form.Group>
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                        placeholder="Area" name='area' type='text'
                        value={exp.area}
                        onChange={updateInput}
                    />
                </Form.Group>
                <div className='descriptionRow'>
                    <Form.Group>
                        <Form.Label className='textArea' style={{width: "100%"}}>Description
                            <Form.Control
                                as="textarea"
                                placeholder="Description" name='description'
                                value={exp.description}
                                onChange={updateInput}
                                rows={3}
                            />
                        </Form.Label>
                    </Form.Group>
                </div>
                <hr></hr>
            </Form>
            
            <Button id="saveButton" variant='success' onClick={saveExperience} style={{display: showForm}}>Save Experience</Button>
        </Container>
    );
}

export default AddExperience;