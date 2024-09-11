import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import './MySideBar.css';
import { Container } from "react-bootstrap";
import { UserContext } from './contexts/UserContextProvider'; // Importa il contesto

function MySideBar() {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_APIKEY;
  const { token } = useContext(UserContext); // Accedi al token dal contesto

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/`,
            {
              headers: {
                Authorization: apiKey
              },
            }
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [token]); // Eseguo fetch solo se c'è il token

  return (
    <Container id="sideContainer">
      <div>
        <p><b>Altri profili simili</b></p>
        {data.slice(412, 422).map((profile, index) => (
          <section
            key={index}
            className="profiliSimili"
          >
            <div className="d-flex">
              <Image
                src={profile.image}
                roundedCircle
                className="me-3 imgProfile"
              />
              <div
                className="d-flex flex-column justify-content-between containerText"
              >
                <div>
                  <p className="nameProfile">
                    {profile.name} {profile.surname}
                  </p>
                  <p className="titleProfile">{profile.title}</p>
                </div>
                <Button
                  as={Link}
                  to={`/profile/${profile._id}`}
                  variant="outline-light"
                  className="detailsBtn"
                >
                  Details
                </Button>
              </div>
            </div>
            <hr></hr>
          </section>
        ))}
      </div>
    </Container>
  );
}

export default MySideBar;
