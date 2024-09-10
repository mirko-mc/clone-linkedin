import './ExperienceContainer.css'
import { getProfileUrl } from '../fetchUrls';
import { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import {Container} from 'react-bootstrap'
// mi porto dietro anche setExpChanged perchè su edit o dlt di un commento devo refreshare l'elenco

function ExperienceContainer({ id, expChanged, setExpChanged }) {
    const apiKey = process.env.REACT_APP_APIKEY;
    const [commentsList, setCommentsList] = useState([])


    const getExperiences = async function () {
        if (id) {
            const resp = await fetch(`${getProfileUrl}/${id}/experiences`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": apiKey
                }
            })
            const data = await resp.json()
            setCommentsList(data)
        }
    }

    useEffect(() => { getExperiences() }, [id, expChanged])

    return (
        <Container id="experienceContainer">
            <h5>Esperienza</h5>
            <ul>
                {commentsList.map(c => <SingleComment key={c._id} 
                    comment={c} 
                    expChanged={expChanged}
                    setExpChanged={setExpChanged}/> )}
            </ul>
        </Container>
    );
}

export default ExperienceContainer;