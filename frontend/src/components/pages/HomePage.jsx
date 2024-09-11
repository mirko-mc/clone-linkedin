import { Button, Modal, Form } from "react-bootstrap";
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import './HomePage.css';
import ProfileContainer from '../ProfileContainer';
import ExperienceContainer from '../ExperienceContainer';
import { UserContext } from '../contexts/UserContextProvider';
import AddExperience from '../AddExperience';
import { login } from '../../fetchUrls';

function HomePage() {
    const [userId, setUserId] = useState(null);
    const [expChanged, setExpChanged] = useState(false);
    const [show, setShow] = useState(false); 
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });
    const { id } = useParams();
    const { selectedUser, setToken, token } = useContext(UserContext); // Aggiunto token e setToken dal contesto
    let [searchParams, setSearchParams] = useSearchParams();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const tokenObj = await login(formValue); // Recupero token
            if (tokenObj && tokenObj.token) {
                localStorage.setItem("token", tokenObj.token); // Salvo il token nel localStorage
                setToken(tokenObj.token); // Aggiorno il token nel contesto
                handleClose(); // Chiudo la modale
                alert("Login effettuato con successo");
            } else {
                alert("Credenziali non valide");
            }
        } catch (error) {
            console.log(error);
            alert("Errore durante il login");
        }
    };

    useEffect(() => {
        if (searchParams.get('token')) {
            localStorage.setItem('token', searchParams.get('token'));
            setToken(searchParams.get('token')); // Aggiorna il token nel contesto
        }
    }, [searchParams]);

    useEffect(() => {
        id ? setUserId(id) : setUserId(selectedUser?._id);
    }, [id, selectedUser]);

    return ( 
        <>        
        {!token && (
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Login
                </Button>
                or
                <Button variant="primary" as={Link} to={'http://localhost:5000/api/v1/auth/login-google'}> {/* DA METTERE LE GIUSTE URL */}
                    Login with Google
                </Button>
            </div>
        )}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>LOGIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} placeholder="your password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Login now
                </Button>
            </Modal.Footer>
        </Modal>

        {token && (
            <>
                <ProfileContainer id={userId} />
                <AddExperience id={userId} expChanged={expChanged} setExpChanged={setExpChanged} />
                <ExperienceContainer id={userId} expChanged={expChanged} setExpChanged={setExpChanged} />
            </>
        )}
        </>
    );
}

export default HomePage;
