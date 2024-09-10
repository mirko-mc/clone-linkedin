import { Col, Container, Row } from "react-bootstrap";
import "./MyFooter.css";

function MyFooter() {
  return (
    <Container className="footer">
      <Row className="align-items-center">
        <Col >
          <p>Informazioni</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Accessibilità</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Talent Solutions</p>
        </Col>
        <Col sm={12} md={3}>
          <div className="d-flex">
            <div className="footer-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-question-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
              </svg>
            </div>
            <div className="footer-text">
              <h5>Domande?</h5>
              <p>Visita il nostro Centro assistenza</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col sm={12} md={3}>
          <p>Informativa sulla community <br></br> professionale</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Carriera</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Soluzioni di marketing</p>
        </Col>
        <Col sm={12} md={3}>
          <div className="d-flex">
            <div className="footer-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </div>
            <div className="footer-text">
              <h5>Gestisci il tuo account e la tua privacy</h5>
              <p>Vai alle impostazioni</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col sm={12} md={3}>
          <p>Privacy e condizioni</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Opzioni per gli annunci <br></br> pubblicitari</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Pubblicità</p>
        </Col>
        <Col sm={12} md={3}>
          <div className="d-flex">
            <div className="footer-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-shield-shaded"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
                />
              </svg>
            </div>
            <div className="footer-text">
              <h5>Trasparenza sui contenuti consigliati</h5>
              <p>Scopri di più sui contenuti consigliati</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col sm={12} md={3}>
          <p>Sales solutions</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Mobile</p>
        </Col>
        <Col sm={12} md={3}>
          <p>Piccole imprese</p>
        </Col>
        <Col sm={12} md={3}>
          <p></p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col sm={12} md={3}>
          <p>Centro sicurezza</p>
        </Col>
      </Row>
      <Row className="align-items-center"></Row>
    </Container>
  );
}

export default MyFooter;
