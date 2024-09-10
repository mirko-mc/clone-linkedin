import { Button, Form } from "react-bootstrap";
import "./MyNav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./contexts/UserContextProvider";
import { Link } from "react-router-dom";
function MyNav() {

// il jsx si rirenderizza se cambia una prop. il context è a tutti gli effetti una prop
// quando termina la fetch, selectedUser cambia e di conseguenza il jsx si renderizz di nuovo
// se avessi bisogno di far partire una funzione al cambio di selectedUser, invece, dovrei usare useEffect
const { selectedUser } = useContext(UserContext);



  return (
    <Navbar className="bg-body">
      <Container >
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
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
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
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  <span className="icon-text">Rete</span>
                </div>
              </Nav.Link>
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                  <span className="icon-text">Lavoro</span>
                </div>
              </Nav.Link>
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                  <span className="icon-text">Rete</span>
                </div>
              </Nav.Link>
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  <span className="icon-text">Messaggistica</span>
                </div>
              </Nav.Link>
              <Nav.Link className="icons" href="#link">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                  <span className="icon-text">Notifiche</span>
                </div>
              </Nav.Link>
            </div>
            <div className="d-flex flex-column align-items-center">
              <NavDropdown
                title={
                  <img src={selectedUser?.image} alt="" className="rounded-circle1" />
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
                      <span className="dropDownTitle">{selectedUser?.title}</span>
                    </div>
                  </div>
                </NavDropdown.Item >
                <NavDropdown.Item className="d-flex justify-content-center non-click dropDownItem">
                  <Button as ={Link} to="/" className="dropDownButton click">Visualizza profilo</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="non-click dropDownItem">
                  <div className="d-flex flex-column gap-2">
                    <h6 className="dropDownName non-click">Account</h6>
                    <span className="dropDownLink click">Impostazione e privacy</span>
                    <span className="dropDownLink click">Guida</span>
                    <span className="dropDownLink click">Lingua</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="non-click dropDownItem">
                  <div className="d-flex flex-column gap-2">
                    <h6 className="dropDownName click">Gestisci</h6>
                    <span className="dropDownLink click">Post e attività</span>
                    <span className="dropDownLink click">
                      Account per la pubblicazione di off...
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="non-click dropDownItem">
                  <span className="dropDownLink click">Esci</span>
                </NavDropdown.Item>
              </NavDropdown>
              <span className="icon-text-s">Tu</span>
            </div>

            <div className="d-flex flex-column align-items-center border-left">
              <NavDropdown
              className="non-click non-visible"
                title={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    {" "}
                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>{" "}
                  </svg>
                }
                id="collapsible-nav-dropdown"
              >
              </NavDropdown>
              <span className="icon-text-s2">Per le aziende</span>
            </div>
            <div className= "premium2"
              style={{
                marginTop: "0.3rem",
                width: "7rem",
                textAlign: "center",
              }}
              
            >
              <span className="premium2">Prova premium per 0 EUR</span>
            </div>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default MyNav;
