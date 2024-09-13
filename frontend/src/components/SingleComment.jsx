import { Button, Container, Form, Modal, ModalBody} from "react-bootstrap";
import "./SingleComment.css";
import moment from "moment";
import { deleteExperience, editExp, editProfile, getProfileUrl } from "../fetchUrls";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContextProvider";

function SingleComment({ comment, expChanged, setExpChanged }) {
  const apiKey = process.env.REACT_APP_APIKEY;
  const id = comment.user;
  const expId = comment._id;
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const [showEdit, setEdit] = useState(false);
  

  const sd = moment(comment.startDate);
  const ed = moment(comment.endDate);

  const strSd = sd.format("MMM YYYY");
  const strEd = ed.format("MMM YYYY");

  const years = ed.diff(sd, "year");
  sd.add(years, "years");

  const months = ed.diff(sd, "months");
  sd.add(months, "months");

  const initialFormValue = {
    role: comment.role,
    company: comment.company,
    startDate: comment.startDate,
    endDate: comment.endDate,
    description: comment.description,
    area: comment.area,
  };
    
  const updateInput = (event) => {
    event.preventDefault();
    const target = event.target;
    setExp({ ...exp, [target.name]: target.value });
  }; 

  const [exp, setExp] = useState(initialFormValue);
  

  const handleEditExperience = async function () {
    await editExp(exp, expId);
    setEdit(!showEdit);
    setExpChanged(!expChanged);
  };

  const handleDeleteExperience = async function () {
    await deleteExperience(expId);
    setExpChanged(!expChanged);

    // const resp = await fetch(`${getProfileUrl}/${id}/experiences/${expId}`,{
    //     method: 'DELETE',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": apiKey
    //     }
    // })
    // if(resp.ok) {
    //     setExpChanged(!expChanged)
    // }
    // else{
    //     console.log('error')
    // }
  };

  const [isMainUserProfile, setIsMainUserProfile] = useState(false);

  // al cambiamento di selectedUser e id, rifaccio il controllo. SelectedUser mi serve perchè arriva
  // dalla fetch e ci mette un attimo a caricare. Id perchè così quando cambio pagina, ricontrollo
  // di chi è il profilo che viene caricato
  useEffect(
    () => setIsMainUserProfile(id === selectedUser?._id || id === undefined),
    [selectedUser, id]
  );

  return (
    <Container id="commentContainer">
      <div className="companyInfoWrapper">
        <div className="commImgWrapper">
          <img src="https://picsum.photos/50/50" alt="placeholder" />
        </div>
        <div className="companyTextDetails">
          <h5>{comment.company}</h5>
          {/* <p>
            {strSd} - {strEd} | {years} anni {months} mesi
          </p> */}
          <p>{ed._isValid ? `${strSd} - ${strEd} | ${years} anni ${months} mesi` : `${strSd} | In corso`}</p>
        </div>
        {isMainUserProfile && (
          <div className="cmntButtonWrapper">
            <Button
              variant="warning"
              onClick={() => setEdit(true)}
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </Button>
            <Modal show={showEdit} onHide={() => setEdit(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form /* style={{ display: showEdit }} */>
              <hr></hr>
              <div className="topRow">
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    placeholder="Role"
                    name="role"
                    type="text"
                    value={exp.role}
                    onChange={updateInput}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    placeholder="Company"
                    name="company"
                    type="text"
                    value={exp.company}
                    onChange={updateInput}
                  />
                </Form.Group>
              </div>
              <div className="datesRow">
                <Form.Group>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    name="startDate"
                    type="date"
                    value={exp.startDate}
                    onChange={updateInput}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    name="endDate"
                    type="date"
                    value={exp.endDate}
                    onChange={updateInput}
                  />
                </Form.Group>
              </div>
              <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control
                  placeholder="Area"
                  name="area"
                  type="text"
                  value={exp.area}
                  onChange={updateInput}
                />
              </Form.Group>
              <div className="descriptionRow">
                <Form.Group>
                  <Form.Label className="textArea" style={{ width: "100%" }}>
                    Description
                    <Form.Control
                      as="textarea"
                      placeholder="Description"
                      name="description"
                      value={exp.description}
                      onChange={updateInput}
                      rows={3}
                    />
                  </Form.Label>
                </Form.Group>
              </div>
              <hr></hr>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEdit(false)}>Close</Button>
              <Button variant="success" onClick={() => handleEditExperience()}>Save</Button>
            </Modal.Footer>
            </Modal>
            <Button
              variant="danger"
              onClick={() => {
                handleDeleteExperience();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </Button>
          </div>
        )}
      </div>
      <div className="experienceWrapper">
        <p>{comment.area}</p>
        <p>{comment.description}</p>
      </div>
      <hr></hr>
    </Container>
  );
}

export default SingleComment;
