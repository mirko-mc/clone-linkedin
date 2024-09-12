import { Button, Form, Modal, Navbar, NavDropdown, Nav, Container, Image } from "react-bootstrap";
import "./MyNav.css";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContextProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../fetchUrls";



function MyNav() {
  // Recupera selectedUser dal contesto
  const { selectedUser } = useContext(UserContext);
  const { token , setToken} = useContext(UserContext)
  const { userInfo , setUserInfo} = useContext(UserContext)
  const navigate = useNavigate()
  console.log(userInfo)
  const [showReg, setShowReg] = useState(false);
  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true)


  const initialRegistrationFormValue = {
    name: "",
    surname: "",
    avatar: "",
    password: "",
    email: "",
  }
  const [regFormValue, setRegFormValue] = useState(initialRegistrationFormValue)
  const [avatar, setAvatar] = useState("")

  const handleChangeRegistration = (event) => {
    setRegFormValue({
      ...regFormValue,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeImage = (event) => {
    // handleChangeRegistration(event)
    setAvatar(event.target.files[0])
  }

  const handleRegister = async () => {
    const res = await register(regFormValue, avatar)
    console.log(res)
    handleCloseReg()
    setRegFormValue(initialRegistrationFormValue)
    // alert('Registrazione effettuata')
  }

  const handleLogout = () =>{
    setToken(null)
    setUserInfo(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <Navbar className="bg-body">
      <Container>
        <Navbar.Brand href="#home">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </Navbar.Brand>

        {/* Mostra solo se l'utente è selezionato (loggato) */}
        {selectedUser && (
          <Nav className="me-auto">
            <div className="divSearch">
              <Form className="input-search">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </div>

            <div className="d-flex justify-content-around">
              {/* Icone visibili solo se c'è un utente selezionato */}
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                  <span className="icon-text">Home</span>
                </div>
              </Nav.Link>
              {/* Altre icone */}
            </div>

            {/* Dropdown utente */}
            <div className="d-flex flex-column align-items-center">
              <NavDropdown
                title={
                  <img
                    src={selectedUser?.image}
                    alt=""
                    className="rounded-circle1"
                  />
                }
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item className="dropDownItem xm">
                  <div className="d-flex">
                    <img
                      src={selectedUser?.image}
                      className="rounded-circle2"
                      alt=""
                    />
                    <div className="d-flex flex-column mx-2">
                      <>
                        <p className="dropDownName">
                          {selectedUser?.name} {selectedUser?.surname}
                        </p>
                      </>
                      <span className="dropDownTitle">
                        {selectedUser?.title}
                      </span>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button as={Link} to="/" className="dropDownButton click">
                    Visualizza profilo
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <span className="dropDownLink click">Esci</span>
                </NavDropdown.Item>
              </NavDropdown>
              <span className="icon-text-s">Tu</span>
            </div>
          </Nav>
        )}
            <Modal show={showReg} onHide={handleCloseReg}>
          <Modal.Header closeButton>
            <Modal.Title>REGISTER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={regFormValue.email} onChange={handleChangeRegistration} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={regFormValue.password} onChange={handleChangeRegistration} placeholder="your password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" value={regFormValue.name} onChange={handleChangeRegistration} placeholder="your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="surname" name="surname" value={regFormValue.surname} onChange={handleChangeRegistration} placeholder="your surname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" name="avatar" onChange={handleChangeImage} placeholder="your picture" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReg}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRegister}>
              Register now
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="d-flex">
          {!token && <Button className="ms-3" variant="secondary" onClick={handleShowReg}>
            Register
          </Button>}
          {token && <Button className="ms-2 me-2 logout" variant="primary" onClick={handleLogout}>
            Logout
          </Button>}
          {userInfo && <Image src={userInfo.avatar} className="userAvatar me-2" />}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNav;
